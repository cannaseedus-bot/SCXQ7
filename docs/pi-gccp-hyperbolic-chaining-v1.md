# π-GCCP Hyperbolic Chaining v1 (NORMATIVE)

This extends π-GCCP from **single saddle** to **ordered hyperbolic chains**.

---

## π-GCCP.HYPERBOLIC_CHAIN.v1

```json
{
  "@theorem": "π-gccp.hyperbolic-chain.v1",
  "@status": "frozen",
  "@geometry": "hyperbolic",
  "@composition": "ordered",

  "domain": {
    "input": "sequence<scxq2.pi-signal.v1>",
    "min_length": 2,
    "max_length": "unbounded"
  },

  "invariant": {
    "per_node": "π-gccp.saddle.v1",
    "global": "mobius-orientation-preserving"
  },

  "composition_law": {
    "phase": "Σ(phase_i) mod 2π",
    "curvature": "Σ(curvature_i)",
    "orientation": "xor(orientation_i)",
    "closure": "AND(closure_flag_i)"
  },

  "interference": {
    "rule": "adjacent-only",
    "meaning": "local tension propagation",
    "non_commutative": true
  },

  "collapse_condition": {
    "require": "closure == true",
    "else": "saddle-preserved (non-collapsible)"
  }
}
```

---

## Semantic Meaning (Hard Rule)

* **Each saddle = unresolved tension**
* **Chain = narrative / reasoning path**
* **Collapse only occurs if *all* saddles resolve**

This is why this works as **retrieval + reasoning**, not scoring.

---

## Hyperbolic Chain Collapse (Exact)

```text
Given signals S₁ … Sₙ:

if ∀i closureᵢ = 1:
  result = Σ(mass_geometricᵢ) + Σ(mass_algebraicᵢ)
else:
  result = hyperbolic_state (non-collapsed)
```

No partial credit. No soft weighting.
