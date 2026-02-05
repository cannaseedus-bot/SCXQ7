# π-GCCP Invariant: Möbius Twist v1 (NORMATIVE)

```json
{
  "@invariant": "pi-gccp.mobius.v1",
  "@status": "normative",
  "@domain": "geometric-semantics",
  "@topology": "non-orientable",
  "manifold": {
    "type": "mobius-strip",
    "dimension": 2,
    "boundary": "single",
    "orientation": "reversing"
  },
  "geometric_definition": {
    "parameterization": {
      "u": "longitudinal ∈ [0, 1)",
      "v": "transverse ∈ [-1, 1]"
    },
    "twist": {
      "angle": "π",
      "location": "u = 1"
    }
  },
  "semantic_interpretation": {
    "meaning": "continuity under inversion",
    "captures": [
      "irony",
      "self-reference",
      "role reversal",
      "negation-preserving meaning",
      "inside-out equivalence"
    ]
  },
  "collapse_behavior": {
    "orientation_flip": true,
    "phase_shift": "π",
    "path_closure": "single-cycle"
  },
  "legality": {
    "requires_embedding": false,
    "requires_profile": false,
    "approximation_allowed": false,
    "symbolic_only": false
  },
  "canonical_kernel": "pi-gccp.kernel.mobius.wgsl"
}
```

## Formal meaning

* Two semantic paths that appear opposite can be identical.
* Orientation is not preserved.
* Distance metrics fail; alignment survives inversion.
