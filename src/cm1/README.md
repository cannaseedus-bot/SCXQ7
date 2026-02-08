# CM-1 Verifier (WASM)

This folder contains the CM-1 verifier source and build script used by the
reference conformance runner.

- `cm1_verify_wasm.c` exports a single `verify` function.
- `build.sh` produces `wasm/cm1_verify.wasm`.
- The repo stores a base64 version at `wasm/cm1_verify.wasm.txt`; decode and
  rename to restore the binary if needed.
