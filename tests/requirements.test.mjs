import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const ROOT = path.resolve(import.meta.dirname, "..");

const skillRoot = path.join(ROOT, "skills", "requirements");

function preservesRequirementArtifactsAndEvidence(text) {
  return text.split(/[.!?\n]+/).some((statement) => (
    /\b(?:preserve|keep|retain)\b/i.test(statement) &&
    /\b(?:unrelated|unaffected)\b/i.test(statement) &&
    /\b(?:requirements|artifacts)\b/i.test(statement) &&
    /\bevidence\b/i.test(statement) &&
    /\bvalid\b/i.test(statement) &&
    !/\b(?:not|never|discard|remove)\b/i.test(statement)
  ));
}

test("skill follows discover decide implement validate report and requirement boundary", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const discover = skill.indexOf("## Discover");
  const decide = skill.indexOf("## Decide");
  const implement = skill.indexOf("## Implement");
  const validate = skill.indexOf("## Validate");
  const report = skill.indexOf("## Report");
  assert.ok(discover >= 0 && decide > discover && implement > decide && validate > implement && report > validate);
  assert.match(skill, /NEED -> SCOPE -> REQUIREMENTS -> ACCEPTANCE -> EVIDENCE/);
  assert.match(skill, /Requirements must be implementable and verifiable/i);
  assert.match(skill, /requirements\/v1[\s\S]*docs\/project\/03-REQUIREMENTS\.md/);
});

test("requirements standard separates need scope requirement acceptance and test case", async () => {
  const standard = await readFile(path.join(skillRoot, "references", "REQUIREMENTS_STANDARD.md"), "utf8");
  for (const heading of ["### Need", "### Scope", "### Requirement", "### Acceptance criterion", "### Test case"]) {
    assert.ok(standard.includes(heading), "missing heading: " + heading);
  }
  assert.match(standard, /Do not cure ambiguity with invented precision/i);
  assert.match(standard, /solution-aware only when justified/i);
});

test("discovery keeps facts inferences proposals assumptions questions and conflicts distinct", async () => {
  const discovery = await readFile(path.join(skillRoot, "references", "DISCOVERY_AND_SCOPE.md"), "utf8");
  for (const phrase of ["Confirmed fact/decision", "Inference", "Proposal", "Assumption", "Open question", "Conflict"]) {
    assert.ok(discovery.toLowerCase().includes(phrase.toLowerCase()), "missing source class: " + phrase);
  }
  assert.match(discovery, /Never rewrite an inference or proposal as if it were a confirmed stakeholder decision/i);
  assert.match(discovery, /documented intent\s*\nvs\s*\nobserved behavior\s*\nvs\s*\nnew desired behavior/i);
});

test("acceptance guidance distinguishes evidence and rejects arbitrary thresholds", async () => {
  const acceptance = await readFile(path.join(skillRoot, "references", "ACCEPTANCE_CRITERIA.md"), "utf8");
  assert.match(acceptance, /Given\/When\/Then is supported but optional/i);
  assert.match(acceptance, /Do not invent.*threshold solely to make a requirement measurable/is);
  assert.match(acceptance, /Verification:.*specified requirement/is);
  assert.match(acceptance, /Validation:.*underlying need/is);
  assert.match(acceptance, /Requirement \| What condition must the solution satisfy/);
  assert.match(acceptance, /Test case \| What concrete setup/);
});

test("user stories are optional and never replace requirement semantics", async () => {
  const stories = await readFile(path.join(skillRoot, "references", "USER_STORIES.md"), "utf8");
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  assert.match(stories, /Optional tool, not a universal requirement/i);
  assert.match(stories, /Do not force stories/i);
  assert.match(stories, /does not replace:/i);
  assert.match(skill, /User stories are optional/i);
  assert.match(skill, /Never create one story per requirement by default/i);
});

test("traceability is proportional and supports requirement change impact", async () => {
  const trace = await readFile(path.join(skillRoot, "references", "TRACEABILITY_AND_CHANGE.md"), "utf8");
  assert.match(trace, /Traceability should help answer useful questions, not create paperwork/i);
  assert.match(trace, /source\/need[\s\S]*business rule or constraint[\s\S]*requirement[\s\S]*acceptance criterion/);
  assert.match(trace, /Before changing a confirmed requirement/i);
  assert.match(trace, /Do not update one requirement in isolation/i);
});

test("quality checklist freezes implementable verifiable and no-false-pass gate", async () => {
  const checklist = await readFile(path.join(skillRoot, "references", "QUALITY_CHECKLIST.md"), "utf8");
  assert.match(checklist, /implementable without inventing a material product decision/i);
  assert.match(checklist, /verifiable through plausible evidence/i);
  assert.match(checklist, /arbitrary thresholds absent unless justified/i);
  assert.match(checklist, /Never mark an unavailable stakeholder confirmation, feasibility check, or verification step as passed/i);
});

test("requirements document template exposes scope catalog acceptance questions and traceability", async () => {
  const template = await readFile(path.join(skillRoot, "assets", "requirements-document.template.md"), "utf8");
  const sections = [
    "## 1. Context and sources",
    "## 2. Desired outcomes",
    "## 3. Scope",
    "## 5. Requirements",
    "## 6. Acceptance criteria",
    "## 8. Assumptions, conflicts, and open questions",
    "## 9. Traceability",
    "## 10. Requirement validation",
  ];
  let last = -1;
  for (const section of sections) {
    const index = template.indexOf(section);
    assert.ok(index > last, "missing or out-of-order section: " + section);
    last = index;
  }
  assert.match(template, /Confirmed \/ Proposed \/ Open/);
  assert.match(template, /Do not claim stakeholder validation or feasibility unless it occurred/i);
});

test("skill keeps requirements scope distinct from downstream design and testing capabilities", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  assert.match(skill, /Do not take ownership of architecture, UX\/UI, technical design, planning, testing strategy, or implementation/i);
  assert.match(skill, /hand off the detailed design decision to the corresponding capability/i);
});

test("bounded requirement amendments preserve IDs and reconcile acceptance and traceability", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const policy = skill.split("## Execution depth")[1]?.split("## Discover")[0] ?? "";
  for (const obligation of [
    /bounded amendment[\s\S]*canonical[\s\S]*healthy/i,
    /authoritative requirement IDs[\s\S]*acceptance criteria[\s\S]*source/i,
    /changed obligation[\s\S]*business-rule[\s\S]*traceability/i,
    /smallest[\s\S]*acceptance unit[\s\S]*preserv[\s\S]*unrelated[\s\S]*IDs/i,
    /mandatory[\s\S]*implementability[\s\S]*verifiability[\s\S]*optional-user-stories/i,
  ]) assert.match(policy, obligation);
});

test("deep requirements handling retains uncertainty and cross-cutting safety triggers", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const policy = skill.split("## Execution depth")[1]?.split("## Discover")[0] ?? "";
  for (const trigger of [
    /deep path[\s\S]*new requirements baseline/i,
    /unclear scope[\s\S]*contradictory sources/i,
    /missing durable evidence[\s\S]*failed invariant/i,
    /API[\s\S]*schema[\s\S]*persisted[\s\S]*migration/i,
    /auth[\s\S]*trust/i,
    /deployment[\s\S]*rollback[\s\S]*availability/i,
    /cross-provider dependencies[\s\S]*acceptance\/quality/i,
    /\b(?:complete|full)\b[^.!?\n]*\brequirements\b[^.!?\n]*\bgate\b/i,
  ]) assert.match(policy, trigger);
});

test("requirement evidence invalidation follows semantics rather than identifier stability", async () => {
  const trace = await readFile(path.join(skillRoot, "references", "TRACEABILITY_AND_CHANGE.md"), "utf8");
  const lifecycle = trace.split("## Evidence lifecycle for amendments")[1] ?? "";
  for (const obligation of [
    /locator[\s\S]*revision[\s\S]*scope[\s\S]*result/i,
    /Execution evidence[\s\S]*environment[\s\S]*observed outcome/i,
    /Reusable[\s\S]*unchanged[\s\S]*inspectable/i,
    /Invalidated[\s\S]*history[\s\S]*stable ID[\s\S]*changed acceptance/i,
    /Fresh[\s\S]*independent verification owner/i,
    /Assumed\/inferred[\s\S]*(?:does not|cannot|never)[^.!?\n]*(?:establish|prove|demonstrate)[^.!?\n]*execution/i,
    /independent[\s\S]*testing[\s\S]*review[\s\S]*security[\s\S]*gate[\s\S]*prose/i,
  ]) assert.match(lifecycle, obligation);
  assert.ok(preservesRequirementArtifactsAndEvidence(lifecycle), "unaffected valid artifacts and evidence must be preserved");
});

test("requirement preservation checks accept paraphrases and reject missing or negated obligations", () => {
  assert.ok(preservesRequirementArtifactsAndEvidence("Keep unaffected requirements and their evidence while they remain valid."));
  assert.ok(preservesRequirementArtifactsAndEvidence("Retain valid evidence together with unrelated artifacts."));
  for (const invalid of [
    "Keep valid requirements and their evidence.",
    "Keep unaffected valid requirements.",
    "Do not retain unaffected valid requirements and evidence.",
    "Discard unrelated artifacts and valid evidence.",
  ]) assert.equal(preservesRequirementArtifactsAndEvidence(invalid), false);
});

test("requirements references load by need and template records scoped amendment evidence", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  assert.match(skill, /REQUIREMENTS_STANDARD[\s\S]*new baseline[\s\S]*uncertain/i);
  assert.match(skill, /DISCOVERY_AND_SCOPE[\s\S]*\bwhen\b[\s\S]*\b(?:sources|scope|disagreements)\b/i);
  const implement = skill.split("## Implement")[1]?.split("## Validate")[0] ?? "";
  assert.match(implement, /\b(?:do not|avoid|without)\b[^.!?\n]*\breplay\b[^.!?\n]*\btemplate\b/i);
  assert.match(implement, /bounded[\s\S]*amendment/i);
  const template = await readFile(path.join(skillRoot, "assets", "requirements-document.template.md"), "utf8");
  for (const obligation of [/Affected requirement\/acceptance IDs/i, /Reused evidence/i, /Invalidated evidence[\s\S]*downstream links/i, /Fresh quality checks[\s\S]*results/i]) {
    assert.match(template, obligation);
  }
});
