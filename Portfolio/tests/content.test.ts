import { test } from "node:test";
import assert from "node:assert/strict";
import {
  projects,
  createProjectRegistry,
  isSafeContentLink,
} from "../lib/content/projects";
import type { Project } from "../lib/content/types";
import { socIq } from "../content/projects/soc-iq";

test("registry resolves the flagship and refuses unknown or inherited keys", () => {
  assert.equal(projects.get("soc-iq")?.title, "SOC-IQ");
  for (const slug of ["unknown", "__proto__", "constructor", "../soc-iq"])
    assert.equal(projects.get(slug), undefined);
  assert.deepEqual(
    projects.featured().map((p) => p.slug),
    ["soc-iq"],
  );
});
test("registry rejects duplicate and invalid routes", () => {
  assert.throws(() => createProjectRegistry([socIq, socIq]), /Duplicate/);
  assert.throws(
    () => createProjectRegistry([{ ...socIq, slug: "../invalid" }]),
    /Invalid/,
  );
});
test("SOC-IQ keeps unknown facts unknown and results pending", () => {
  assert.equal(socIq.role, null);
  assert.equal(socIq.year, null);
  assert.equal(socIq.status, "unverified");
  assert.equal(socIq.results.state, "pending");
  assert.deepEqual(socIq.technologies, []);
  assert.deepEqual(socIq.links, []);
  assert.ok(
    socIq.caseStudy.sections.every((s) => s.evidence.state === "pending"),
  );
  assert.deepEqual(
    socIq.caseStudy.sections.map((s) => s.id),
    [
      "ioc-analysis",
      "threat-intelligence",
      "risk-scoring",
      "investigation",
      "frontend",
      "runtime",
      "testing",
      "packaging",
      "production",
    ],
  );
});
test("future projects extend the registry without route changes", () => {
  const another: Project = {
    ...socIq,
    title: "Test fixture",
    slug: "test-fixture",
    featured: false,
  };
  const registry = createProjectRegistry([socIq, another]);
  assert.equal(registry.all().length, 2);
  assert.equal(registry.featured().length, 1);
  const copy = registry.all() as Project[];
  copy.pop();
  assert.equal(registry.all().length, 2);
});
test("unsafe links and missing alternative text are rejected", () => {
  for (const href of [
    "javascript:alert(1)",
    "data:text/html,x",
    "//evil.example",
    "/\\evil.example",
    "/bad\nurl",
  ])
    assert.equal(isSafeContentLink(href), false);
  assert.equal(isSafeContentLink("https://example.com/source"), true);
  assert.equal(isSafeContentLink("/work/soc-iq"), true);
  assert.throws(
    () =>
      createProjectRegistry([
        { ...socIq, links: [{ label: "bad", href: "javascript:alert(1)" }] },
      ]),
    /Unsafe/,
  );
  assert.throws(
    () =>
      createProjectRegistry([
        { ...socIq, media: [{ src: "/image.png", alt: "" }] },
      ]),
    /alt/,
  );
});
