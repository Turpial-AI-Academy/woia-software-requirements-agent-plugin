# Requirements Quality Checklist

Use this checklist as a review aid, not as a reason to fill fields mechanically.

## Individual requirement

For each material requirement, ask:

- [ ] Is the reason or source understood?
- [ ] Does it express one primary obligation or condition?
- [ ] Are actor, trigger/context, object, and expected outcome clear enough where they matter?
- [ ] Is ambiguous language resolved or explicitly marked for clarification?
- [ ] Is an implementation choice included only when it is a genuine constraint or agreed behavior?
- [ ] Is the requirement consistent with confirmed scope and applicable business rules?
- [ ] Is it implementable without inventing a material product decision?
- [ ] Is it verifiable through plausible evidence?
- [ ] Are meaningful acceptance conditions or scenarios present where needed?
- [ ] Are unresolved assumptions, dependencies, or decisions visible?

## Requirement set

Ask:

- [ ] Is the underlying need/outcome explicit?
- [ ] Are in-scope and out-of-scope boundaries visible?
- [ ] Are functional behavior, quality conditions, constraints, and business rules distinguished sufficiently?
- [ ] Are conflicts and source disagreements visible?
- [ ] Are important normal, boundary, and error behaviors covered?
- [ ] Are arbitrary thresholds absent unless justified or clearly marked as proposed?
- [ ] Are user stories used only where they improve communication or traceability?
- [ ] Is traceability proportionate to project risk and coordination needs?
- [ ] Can downstream design/development proceed without hidden product decisions?
- [ ] Can downstream verification determine what would count as supporting or refuting evidence?

## Readiness outcome

Use project-native statuses when available. If none exist, a simple result can be:

- **READY**: sufficient for downstream work within stated scope;
- **READY_WITH_OPEN_ITEMS**: downstream work can proceed, but named questions remain;
- **BLOCKED**: a missing/conflicting decision prevents safe implementation of affected requirements.

Never mark an unavailable stakeholder confirmation, feasibility check, or verification step as passed.
