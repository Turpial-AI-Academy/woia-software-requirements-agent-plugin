# Requirements Standard

## Governing principle

~~~text
NEED -> SCOPE -> REQUIREMENTS -> ACCEPTANCE -> EVIDENCE
~~~

Requirements engineering turns a real need and agreed boundaries into conditions that can guide implementation and verification. It does not start by choosing a technology or filling a template.

## Core distinctions

### Need

A need describes the problem, outcome, decision, or capability that matters to a person, organization, or system context. A need should remain meaningful even if the eventual technical solution changes.

### Scope

Scope defines which problems, outcomes, behaviors, and obligations belong to the current delivery and which do not. Explicit exclusions are useful decisions, not missing content.

### Requirement

A requirement is a condition the solution must satisfy.

Use categories as thinking aids:

- **Functional**: behavior or capability.
- **Quality**: a quality condition on behavior or operation.
- **Constraint**: a real limit on solution choices.

Do not force every project into a large taxonomy if a smaller classification communicates better.

### Business rule

A business rule expresses domain policy or a conditional obligation that can govern multiple requirements. Preserve the rule as a distinct source when possible rather than duplicating or silently altering it in many requirement statements.

### Acceptance criterion

An acceptance criterion describes an observable condition or scenario that supports deciding whether a requirement is satisfied.

### Test case

A test case is an executable or manually repeatable procedure with concrete setup, data, steps, and expected comparison. Requirements work can define acceptance intent without pretending to own the entire testing strategy.

## Requirement quality

A useful requirement is normally:

1. **necessary or justified**: it connects to a need, rule, constraint, risk, or agreed outcome;
2. **focused**: it carries one primary obligation or condition;
3. **clear**: material actors, conditions, objects, and outcomes are understandable in project terminology;
4. **consistent**: it does not contradict confirmed scope, rules, or other requirements;
5. **solution-aware only when justified**: it avoids accidental implementation prescription but preserves genuine constraints;
6. **implementable**: downstream design and development can act without inventing a material product decision;
7. **verifiable**: there is a plausible observation or evidence path that could support or refute compliance;
8. **traceable when needed**: the reason, source, and downstream consequences can be followed at the level the project requires.

These are review properties, not a demand that every requirement contain all context in one sentence.

## Language

Prefer direct obligations and observable outcomes. Words such as "fast", "easy", "secure", "normal", "appropriate", "intuitive", "robust", or "user-friendly" need context before they can function as requirements.

Do not cure ambiguity with invented precision. A number is useful only when its value, environment, measurement method, and business or user rationale are defensible.

## Solution constraints

A technology name can be legitimate when it comes from a binding integration, compatibility, legal, contractual, organizational, migration, or operational constraint. Record why it constrains the solution.

A technology preference without such evidence belongs in design exploration, not in the requirement baseline.

## Set quality

A requirement set should make visible:

- the confirmed need and desired outcomes;
- in-scope and out-of-scope boundaries;
- applicable business rules and constraints;
- functional and quality obligations;
- acceptance conditions for material behavior;
- assumptions and open questions;
- conflicts or blocked decisions;
- enough traceability for downstream coordination.

Completeness is relative to the agreed scope and risk. Do not add speculative requirements to make the document look comprehensive.
