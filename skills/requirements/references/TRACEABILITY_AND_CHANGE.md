# Traceability and Requirement Change

## Proportionate traceability

Traceability should help answer useful questions, not create paperwork.

Depending on project size and risk, trace links may connect:

~~~text
source/need
-> business rule or constraint
-> requirement
-> acceptance criterion
-> story/spec/design
-> implementation task/change
-> verification evidence
~~~

Not every project needs every hop.

## Minimum useful rule

A material requirement should have enough context to answer:

1. why does this requirement exist;
2. what source, need, rule, constraint, or decision supports it;
3. how will we know whether it is satisfied;
4. what downstream work/evidence must be reconsidered if it changes.

Use [traceability-matrix.template.md](../assets/traceability-matrix.template.md) when a matrix adds value. Existing repository-native traceability is preferable when healthy.

## Stable identifiers

Use stable IDs when requirements will be referenced across documents, issues, tests, releases, or teams. Do not renumber mature identifiers merely for aesthetics.

IDs identify requirements; they do not encode priority, implementation order, or truth by themselves.

## Change impact

Before changing a confirmed requirement:

- identify the source/reason for the change;
- determine whether scope, business rules, constraints, or assumptions changed;
- identify affected acceptance criteria and downstream artifacts;
- distinguish clarification from behavior change;
- record unresolved conflicts;
- preserve history according to the repository's normal decision/change process.

Do not update one requirement in isolation when the same decision is duplicated elsewhere.

## Deletion and deferral

When removing a requirement, state whether it was:

- invalid or duplicate;
- superseded;
- moved out of scope;
- deferred to later work;
- replaced by a different requirement.

Avoid leaving downstream stories/tests/specifications pointing to a requirement that no longer exists.

## Traceability gaps

A gap is not automatically a defect. Prioritize gaps where they create material ambiguity, missed obligations, duplicated work, or inability to verify a critical condition.

## Evidence lifecycle for amendments

For reused requirement evidence, retain its source locator and revision or decision record, supported requirement/acceptance semantics and scope, actual check/observation and result, and material freshness conditions. Execution evidence must expose its environment and observed outcome. Preserve the existing repository evidence convention.

- **Reusable:** sources, authority, obligation, acceptance, scope, and relevant conditions remain unchanged and inspectable.
- **Invalidated:** changed source, rule, requirement, acceptance criterion, constraint, or dependency can alter the supported claim. Retain prior evidence as history; a stable ID does not make changed acceptance semantics equivalent.
- **Fresh:** inspect the changed sources and revalidate the affected requirement-quality checks and links. Missing or stale evidence requires new work; execution evidence invalidated downstream returns to its independent verification owner.
- **Assumed/inferred:** remain explicit. A written criterion, proposal, inference, or recollection does not establish execution, stakeholder acceptance, or feasibility.

Preserve unrelated valid artifacts and evidence. Re-evaluate downstream links only where impact or a mandatory cross-cutting invariant requires it. Do not mark an independent testing/review/security gate passed from requirement prose, and do not replay expensive unchanged observations merely because a new session starts.
