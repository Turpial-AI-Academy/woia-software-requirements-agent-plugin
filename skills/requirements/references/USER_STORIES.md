# User Stories

## Optional tool, not a universal requirement

User stories can improve communication when a team benefits from a concise actor-goal-value framing. They are not mandatory for a valid requirements baseline.

A common form is:

~~~text
As <actor>
I want <goal/capability>
so that <value/outcome>
~~~

The wording is a communication aid, not a specification language.

## Use stories when they help

Stories are useful when they:

- clarify actor perspective or user value;
- group related requirements for conversation;
- give product/backlog work a shared unit of discussion;
- improve traceability between needs, requirements, and delivery items.

## Omit or adapt stories when they hurt

Do not force stories for:

- system-to-system obligations with no meaningful user persona;
- cross-cutting quality requirements;
- legal, contractual, operational, or platform constraints;
- domain rules that are clearer as rules;
- tiny projects where the requirement catalog is already the clearest communication surface.

Do not invent a fake human actor such as "As the database" merely to satisfy the template.

## Story boundaries

A story does not replace:

- the source need or business rule;
- precise requirements;
- acceptance criteria;
- constraints;
- test cases.

A story may link to multiple requirements, and a requirement may support more than one story. Do not create a one-to-one mapping by default.

## Story quality

When stories are used, verify that:

- the actor is meaningful;
- the goal is not merely a UI or technical implementation step unless that is genuinely the actor's need;
- the value explains why the work matters;
- acceptance criteria clarify behavior;
- dependencies or unresolved decisions remain visible outside the story text.

Keep story splitting and delivery sequencing in the planning/specification workflow rather than pretending requirements engineering alone determines implementation order.
