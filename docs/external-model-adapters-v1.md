# External Model Adapters v1 (Emitters Only, Zero Authority)

Adapters **may emit π-signals**.
They **may not collapse, rank, or decide**.

---

## π-ADAPTER.INTERFACE.v1 (LOCKED)

```json
{
  "@interface": "π-adapter.v1",
  "@status": "normative",

  "role": "signal-emitter",
  "authority": "none",

  "allowed_outputs": [
    "scxq2.pi-signal.v1"
  ],

  "forbidden_actions": [
    "collapse",
    "ranking",
    "aggregation",
    "proof-emission"
  ],

  "requirements": {
    "deterministic": true,
    "stateless": true,
    "idempotent": true
  }
}
```

---

## Adapter Contract (Hard Law)

```text
adapter(input) → π-signal
π-GCCP decides everything else
```

---

## Example: GGUF / ONNX / WASM / WebGPU Adapter

```json
{
  "@adapter": "gguf-encoder.v1",
  "@type": "external-model",

  "emits": {
    "phase": "angle(query, latent)",
    "curvature": "similarity_gradient",
    "orientation": "sign(dot)",
    "mass_geometric": "π * normalized_score",
    "mass_algebraic": 0,
    "closure_flag": 1
  }
}
```

If the model lies → **proof fails downstream**.
