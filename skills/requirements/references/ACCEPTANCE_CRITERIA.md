# Acceptance Criteria

## Purpose

Acceptance criteria turn a general requirement into observable conditions that help implementation and verification converge on the same meaning.

They are not a substitute for a full testing strategy.

## Scenario structure

A useful scenario normally communicates:

~~~text
initial condition/context
-> action/event
-> observable result
~~~

Given/When/Then is supported but optional. Use it when it improves clarity; do not force it mechanically.

## Coverage perspectives

For material behavior, consider:

- normal or expected use;
- meaningful boundaries;
- invalid input or error behavior;
- authorization/permission conditions when relevant;
- persistence or state transition when claimed;
- concurrency, retry, or idempotency only when the requirement actually depends on them;
- accessibility or other quality conditions when they are part of the requirement.

Do not enumerate every conceivable combination. Select scenarios that clarify important decisions and risks.

## Boundaries

A boundary is useful when it comes from the domain, platform, policy, usability evidence, capacity planning, regulation, or another defensible source.

Do not invent "under 200 ms", "99.9%", "80 characters", or another threshold solely to make a requirement measurable. When a proposed threshold needs validation, label it as proposed and record how it will be justified.

## Evidence

Match the evidence to the claim.

Examples:

- a screenshot can support what was visible at one moment;
- persistence needs evidence across the relevant state transition;
- keyboard operability needs an interaction sequence, not only a visual capture;
- throughput needs a defined workload and environment;
- user usefulness needs validation with appropriate users or evidence, not merely a technical PASS.

## Verification and validation

Keep the questions separate:

- **Verification:** does the solution satisfy the specified requirement?
- **Validation:** is the requirement/solution appropriate for the underlying need and context?

Passing acceptance criteria supports verification within their scope. It does not prove every broader product outcome.

## Requirement vs acceptance criterion vs test case

| Element | Main question |
|---|---|
| Requirement | What condition must the solution satisfy? |
| Acceptance criterion | What observable result would support accepting that condition in a scenario? |
| Test case | What concrete setup, data, steps, and comparison will execute the check? |

A project may store them together, but the conceptual distinction prevents vague requirements and over-prescriptive tests.

## Evidence limits

Record what a check does not prove when overclaiming is plausible. One platform, one browser, one data set, one role, or one timing measurement must not silently become evidence for all contexts.
