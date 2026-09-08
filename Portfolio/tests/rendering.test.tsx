import { test } from "node:test";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import HomePage from "../app/page";
import WorkPage from "../app/work/page";
import AboutPage from "../app/about/page";
import NotFound from "../app/not-found";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import { ProjectDetail } from "../components/projects/project-detail";
import { socIq } from "../content/projects/soc-iq";

test("homepage renders every section in storytelling order without client JS", () => {
  const html = renderToStaticMarkup(<HomePage />);
  const ids = [
    "hero-title",
    "selected-work",
    "engineering",
    "interactive-architecture",
    "journey",
    "about",
    "contact",
  ];
  let last = -1;
  for (const id of ids) {
    const index = html.indexOf(`id="${id}"`);
    assert.ok(index > last, id);
    last = index;
  }
  assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1);
  assert.match(html, /<details>/);
  assert.doesNotMatch(html, /<canvas|<script/);
});
test("navigation is semantic and uses real DOM links", () => {
  const html = renderToStaticMarkup(
    <>
      <Header />
      <Footer />
    </>,
  );
  assert.match(html, /<nav aria-label="Primary">/);
  for (const href of ["/", "/work", "/about", "/#contact", "#main-content"])
    assert.ok(html.includes(`href="${href}"`));
});
test("work and about have one primary heading and usable project navigation", () => {
  for (const element of [<WorkPage />, <AboutPage />]) {
    const html = renderToStaticMarkup(element);
    assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1);
    assert.match(html, /href="\/work\/soc-iq"/);
  }
});
test("project detail shows honest missing metadata and native evidence disclosure", () => {
  const html = renderToStaticMarkup(<ProjectDetail project={socIq} />);
  assert.match(html, /This is a content scaffold/);
  assert.match(html, /To be verified/);
  assert.equal(
    (html.match(/<summary>/g) ?? []).length,
    socIq.caseStudy.sections.length,
  );
  assert.match(html, /No metrics are claimed/);
});
test("content is escaped rather than injected as HTML", () => {
  const html = renderToStaticMarkup(
    <ProjectDetail
      project={{ ...socIq, title: "<script>alert(1)</script>" }}
    />,
  );
  assert.match(html, /&lt;script&gt;/);
  assert.doesNotMatch(html, /<script>/);
});
test("not-found view provides a recovery route", () => {
  const html = renderToStaticMarkup(<NotFound />);
  assert.match(html, /404/);
  assert.match(html, /href="\/work"/);
});
