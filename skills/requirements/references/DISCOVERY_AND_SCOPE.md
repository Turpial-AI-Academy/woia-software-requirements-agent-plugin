# Discovery and Scope

## Discover before drafting

Start from the evidence that already exists. Useful sources may include:

- interviews, discovery notes, product briefs, problem statements, research, or stakeholder decisions;
- business rules, policies, contracts, legal/regulatory obligations, and domain terminology;
- existing requirement documents, stories, backlog items, issues, decisions, and acceptance criteria;
- repository behavior, API/schema documentation, user-facing behavior, or production evidence for an existing product.

Do not treat all sources as equally authoritative. Record ownership, freshness, and conflicts when they matter.

## Source classes

Keep these classes distinct:

| Class | Meaning |
|---|---|
| Confirmed fact/decision | Directly supported by an authoritative source or explicit agreement |
| Inference | Reasonable interpretation that still needs confirmation if material |
| Proposal | New requirement or clarification suggested for consideration |
| Assumption | Working condition being relied upon without confirmation |
| Open question | Missing decision or information |
| Conflict | Sources or stakeholders disagree in a way that affects requirements |

Never rewrite an inference or proposal as if it were a confirmed stakeholder decision.

## Need and outcome

Before listing features, answer:

- who or what experiences the problem;
- what outcome is desired;
- what observable difficulty, risk, obligation, or missed opportunity exists;
- which evidence supports the need;
- what would still be true if the implementation technology changed.

If the only available statement is a requested solution, work backward carefully: identify the intended outcome, but keep it as a question or inference until supported.

## Scope

Record:

- **in scope**: problems, users/actors, behaviors, data obligations, integrations, or outcomes included now;
- **out of scope**: explicitly excluded or deferred work;
- **boundaries**: where this solution's responsibility starts and ends;
- **dependencies**: external decisions or systems that requirements rely on;
- **change triggers**: conditions that would require revisiting scope.

Do not silently expand scope because a desirable feature appears during analysis.

## Business rules

Reference existing business rules rather than paraphrasing them loosely when identity or wording matters. A requirement may operationalize a rule, but the requirement does not become authority to change the rule.

When a rule is conditional, preserve its condition and consequence. Avoid flattening "if/when/only when" semantics into an unconditional feature.

## Existing products

For an existing system, distinguish:

~~~text
documented intent
vs
observed behavior
vs
new desired behavior
~~~

Observed behavior is evidence, not automatically a requirement. Legacy behavior may be accidental, obsolete, or a compatibility contract; investigate before preserving or changing it.

## Open questions and blocking

An open question should state:

- what is unknown;
- which requirements or decisions it affects;
- who or what can resolve it;
- whether work can proceed safely without the answer.

Do not block the whole requirement set when only one branch of behavior is unresolved.
