import fs from "fs";
import crypto from "crypto";

const vectorsPath = new URL("./vectors/collapse.geometry.conformance.json", import.meta.url);
const vectorsRaw = fs.readFileSync(vectorsPath, "utf8");
const vectors = JSON.parse(vectorsRaw);

const wasmPath = new URL("../wasm/cm1_verify.wasm", import.meta.url);
const wasmTextPath = new URL("../wasm/cm1_verify.wasm.txt", import.meta.url);
const wasmBytes = fs.existsSync(wasmPath)
  ? fs.readFileSync(wasmPath)
  : Buffer.from(fs.readFileSync(wasmTextPath, "utf8"), "base64");
const wasmModule = await WebAssembly.instantiate(wasmBytes, {});
const { verify } = wasmModule.instance.exports;

const encoder = (hex) =>
  Uint8Array.from(
    hex
      .trim()
      .split(/\s+/)
      .map((byte) => parseInt(byte, 16))
  );

let failures = 0;
for (const vector of vectors.vectors) {
  const input = encoder(vector.input);
  const ptr = wasmModule.instance.exports.__heap_base || 0;

  const memory = wasmModule.instance.exports.memory;
  const view = new Uint8Array(memory.buffer, ptr, input.length);
  view.set(input);
  const result = verify(ptr, input.length);

  if (result !== vector.expect) {
    failures += 1;
    console.error(`FAIL ${vector.name}: expected ${vector.expect}, got ${result}`);
  } else {
    console.log(`PASS ${vector.name}`);
  }
}

const conformanceHash = crypto.createHash("sha256").update(vectorsRaw).digest("hex");
const report = {
  geometry: vectors["@geometry"],
  kernel: vectors["@kernel"],
  conformance_hash: conformanceHash,
  passed: failures === 0
};

fs.writeFileSync(new URL("./report.json", import.meta.url), JSON.stringify(report, null, 2));

if (failures > 0) {
  process.exit(1);
}
