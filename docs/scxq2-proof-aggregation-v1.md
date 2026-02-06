# SCXQ2 Proof Aggregation v1 (Batch-Verifiable Collapse Proofs)

This is how to verify **many collapses** with **one proof root**.

---

## SCXQ2.PROOF.AGGREGATE.v1

```json
{
  "@proof": "scxq2.aggregate.v1",
  "@type": "batch-execution-proof",
  "@verifiability": "deterministic",

  "inputs": {
    "count": "u32",
    "proofs": [
      {
        "type": "scxq2.pi-collapse.v1",
        "hash": "blake3-256"
      }
    ]
  },

  "aggregation": {
    "method": "merkle-fold",
    "order_sensitive": true,
    "root_hash": "blake3-256"
  },

  "claims": {
    "all_inputs_verified": true,
    "all_collapses_exact": true,
    "no_approximation": true
  },

  "verification": {
    "steps": [
      "verify_each_leaf",
      "recompute_merkle_root",
      "compare_root_hash"
    ],
    "tolerance": 0
  }
}
```

---

## Why This Matters

* **O(1) verification** for N collapses
* Enables:
  * distributed retrieval
  * offline verification
  * audit logs
* Proof size grows **log N**, not N

This is **execution accounting**, not logging.
