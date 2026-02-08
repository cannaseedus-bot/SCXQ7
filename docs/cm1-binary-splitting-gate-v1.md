# CM-1 Binary Splitting Gate v1 (Frozen)

CM-1 does not execute. It constrains the causal shape of execution.
Binary splitting is legal only if the control stream satisfies strict phase geometry.

## 1. Required CM-1 Control Pattern

### Minimal legal sequence

```
SOH   // header.begin
STX   // body.begin

SO    // scope.push (left subtree)
RS    // record.sep
SI    // scope.pop

SO    // scope.push (right subtree)
RS
SI

ETX   // body.end
EOT   // collapse
```

### Meaning

- `SO/SI` enforce balanced recursion.
- `RS` enforces disjoint subranges.
- `EOT` enforces a single collapse point.

## 2. CM-1 Verifier Automaton (binary split)

### State machine (sealed)

```
STATE Idle
  on SOH → Header

STATE Header
  on STX → Active
  else → ILLEGAL

STATE Active
  on SO → Subscope
  on ETX → Closing
  else → ILLEGAL

STATE Subscope
  on RS → Subscope   // internal subdivision
  on SI → Active
  else → ILLEGAL

STATE Closing
  on EOT → Collapse
  else → ILLEGAL

STATE Collapse
  terminal
```

### Hard legality rules

- `SO` / `SI` must balance.
- `EOT` must occur exactly once.
- No `ESC` allowed (grammar switching forbidden).
- No `DLE` allowed (literal bypass forbidden).
- No nesting after `ETX`.

Violation implies illegal state, not error.

## 3. Sufficiency

These constraints force:

- Pure divide-and-conquer.
- No hidden communication between subtrees.
- One-way causal flow.
- Single projection point.

Which is exactly binary splitting.

## 4. Final Locks

1. Collapse geometry is an axiom, not an optimization.
2. Kernels declare geometry compatibility, never authority.
3. CM-1 gates binary splitting by enforcing causal shape, not semantics.

Binary splitting is lawful only when control geometry enforces tree-structured causality.
