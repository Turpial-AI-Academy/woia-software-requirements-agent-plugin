---
name: requirements
description: Elicit, structure, validate, and refine software requirements from discovery and business context. Use when defining scope, functional or quality requirements, constraints, acceptance criteria, open questions, traceability, or implementation-ready requirement artifacts without making user stories mandatory.
license: MIT
compatibility: Works with software projects across domains and delivery styles; output depth depends on available discovery, stakeholder, business-rule, product, and repository evidence.
metadata:
  author: Turpial AI Academy
  version: "0.5.6"
---

# requirements

## Operating flow

~~~text
DISCOVER -> DECIDE -> IMPLEMENT -> VALIDATE -> REPORT
~~~

## Purpose

Turn available project evidence into a coherent requirements baseline that is useful to implementation and verification without forcing premature solution design or unnecessary ceremony.

The governing chain is:

~~~text
NEED -> SCOPE -> REQUIREMENTS -> ACCEPTANCE -> EVIDENCE
~~~

Load [REQUIREMENTS_STANDARD.md](references/REQUIREMENTS_STANDARD.md) for a new baseline or when requirement meaning or quality is materially uncertain.

## Non-negotiable rules

- Discover the actual need, current agreements, and repository/project context before drafting requirements.
- Distinguish observed/source facts from assumptions, inferences, proposals, and unresolved questions.
- Requirements must be implementable and verifiable at the level appropriate to the project.
- Do not convert architecture, framework, database, API, UI, or implementation preferences into requirements unless they are genuine constraints or agreed product behavior.
- Do not invent numeric thresholds merely to make a requirement look measurable.
- Do not hide contradictions or missing decisions. Record them and block only the affected requirement when necessary.
- User stories are optional; create them only when they improve traceability or communication.
- A requirement, an acceptance criterion, and a test case are related but not interchangeable.
- Preserve healthy existing requirement identifiers, terminology, scope conventions, and traceability where they already work.
- Do not claim stakeholder validation, feasibility, or PASS unless the relevant evidence actually exists.

## Execution depth

Use a bounded amendment when the canonical requirements baseline is healthy, the requested change and its source authority are understood, and supporting evidence is durable and inspectable. A new turn alone does not invalidate that evidence.

For a bounded amendment:

1. locate the authoritative requirement IDs, acceptance criteria, and source decisions affected;
2. identify the changed obligation plus its business-rule, scope, acceptance, and downstream traceability links;
3. inspect only the supporting sources needed to establish those effects;
4. amend the smallest coherent requirement/acceptance unit and its affected links, preserving unrelated requirements, healthy IDs, and valid evidence;
5. verify the affected obligation plus the mandatory need/scope, business-rule consistency, implementability, verifiability, no-invented-thresholds, and optional-user-stories invariants;
6. report what changed, reused or invalidated evidence, fresh quality checks and results, preserved requirements, and open decisions.

Take the deep path for a new requirements baseline, unclear scope, contradictory sources, unhealthy conventions, missing durable evidence for the gate, or a failed invariant. Also deepen analysis for material public API/event/schema contracts, persisted data or migrations, auth/authorization/secrets/trust boundaries, deployment/rollback/availability risk, cross-provider dependencies, or uncertain acceptance/quality constraints. Route detailed design and independent verification to their owning capability.

Reuse evidence only while its source/revision or decision record, requirement/acceptance semantics, scope, and relevant conditions remain valid. Retain an inspectable locator, the actual check or observation, and its result; execution evidence also needs its environment and observed outcome. Changed expected behavior invalidates old acceptance evidence even if the requirement ID is unchanged. Freshly inspect changed sources and revalidate affected requirement-quality obligations; hand invalidated execution evidence to its independent gate owner. Inference, recollection, a documented criterion, or a proposed requirement is not evidence of actual execution or stakeholder validation. Preserve unrelated valid evidence and amortize expensive observations until relevant mutation, drift, or freshness conditions invalidate them.

Load references progressively: the standard for new/uncertain quality decisions, discovery/scope for source or boundary questions, acceptance criteria for scenario ambiguity, traceability/change for affected links, user stories only when useful, and the quality checklist for relevant readiness obligations. Load templates only for a new or insufficient artifact. The deep path retains the complete requirements gate.

## Discover

Use [DISCOVERY_AND_SCOPE.md](references/DISCOVERY_AND_SCOPE.md) when establishing sources/scope or resolving disagreements. For a healthy bounded amendment, start with the affected requirement and its source links.

Inspect, when available:

- discovery notes, problem statements, goals, outcomes, users/actors, stakeholder decisions, and product context;
- business rules, policies, legal/regulatory constraints, contracts, SLAs, and domain terminology;
- existing PRDs, requirement catalogs, user stories, specifications, decisions, issue/backlog records, and acceptance criteria;
- existing behavior and repository evidence when requirements describe an already-built system;
- known interfaces, data obligations, supported platforms, external systems, and operational constraints only to the extent they constrain requirements;
- explicit exclusions, deferred ideas, risks, assumptions, and unresolved questions.

Build a source map before rewriting anything:

~~~text
source/evidence -> need/outcome -> scope -> rule/constraint -> requirement candidate -> open question
~~~

When sources disagree, preserve the disagreement. Do not silently reconcile it.

## Decide

Choose the minimum useful requirements structure for the project. A small change may need a short catalog plus acceptance criteria; a larger product may need scope, actors, functional requirements, quality requirements, constraints, interfaces/data obligations, open questions, and traceability.

Classify conditions by meaning, not by document aesthetics:

- **functional requirement**: observable behavior or capability the solution must provide;
- **quality requirement**: a quality condition on behavior or operation, with meaningful verification context;
- **constraint**: a legitimate limit on solution choices;
- **business rule**: domain policy that requirements must preserve, reference, or operationalize without silently changing;
- **assumption/open question**: unresolved context that must not masquerade as a confirmed requirement;
- **out of scope/deferred**: intentionally excluded work.

Use [USER_STORIES.md](references/USER_STORIES.md) only when stories add value. Never create one story per requirement by default.

## Implement

Use the repository's existing requirement artifact when healthy. Otherwise adapt [requirements-document.template.md](assets/requirements-document.template.md).

Honor an explicit caller-required path. Under the `requirements/v1` contract, the output is `docs/project/03-REQUIREMENTS.md`; standalone use preserves the repository's healthy source of truth. Do not replay a full template for a bounded amendment.

For each material requirement:

1. assign or preserve a stable identifier when traceability benefits from one;
2. state one primary condition;
3. connect it to the need, source, rule, or constraint that justifies it;
4. avoid accidental implementation prescription;
5. make the expected result sufficiently precise to implement;
6. define acceptance evidence or criteria at the appropriate level;
7. mark unresolved dependencies or decisions explicitly.

Use [ACCEPTANCE_CRITERIA.md](references/ACCEPTANCE_CRITERIA.md) for scenarios and [TRACEABILITY_AND_CHANGE.md](references/TRACEABILITY_AND_CHANGE.md) when linking requirements to downstream work or evaluating changes.

Do not take ownership of architecture, UX/UI, technical design, planning, testing strategy, or implementation. Record requirement-level implications and hand off the detailed design decision to the corresponding capability.

## Validate

Use the relevant obligations in [QUALITY_CHECKLIST.md](references/QUALITY_CHECKLIST.md) when readiness or validation scope needs clarification. Bounded amendments still check the mandatory invariants above.

Validate both individual requirements and the set:

- each requirement is necessary or explicitly justified;
- each requirement has one primary obligation or condition;
- ambiguous terms have useful context or observable meaning;
- functional behavior, quality conditions, constraints, and business rules are not conflated;
- acceptance criteria demonstrate meaningful scenarios rather than restating the requirement;
- boundaries, exclusions, error behavior, and important limits are visible where relevant;
- arbitrary numbers or solution choices were not introduced without rationale;
- conflicts, assumptions, and open questions remain visible;
- traceability is sufficient for the project's risk and coordination needs;
- downstream implementers can act without inventing material product decisions;
- downstream verifiers can determine what evidence would support or refute compliance.

A requirement set is not ready merely because every field in a template is populated.

## Report

Report:

1. sources and context actually used;
2. confirmed need/outcomes and scope;
3. requirements added, changed, preserved, or removed;
4. applicable business rules and constraints;
5. acceptance criteria and traceability created;
6. user stories used or intentionally omitted, with the reason when relevant;
7. conflicts, assumptions, open questions, and blocked requirements;
8. validation performed and any remaining quality gaps;
9. handoffs to architecture, UX/UI, technical design, planning, testing, or other capabilities.

Separate source-backed facts from new proposals.

## Detailed references

- [Requirements Standard](references/REQUIREMENTS_STANDARD.md)
- [Discovery and Scope](references/DISCOVERY_AND_SCOPE.md)
- [Acceptance Criteria](references/ACCEPTANCE_CRITERIA.md)
- [Traceability and Change](references/TRACEABILITY_AND_CHANGE.md)
- [User Stories](references/USER_STORIES.md)
- [Quality Checklist](references/QUALITY_CHECKLIST.md)
