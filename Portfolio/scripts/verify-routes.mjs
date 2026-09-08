import assert from "node:assert/strict";
const base = process.env.PORTFOLIO_BASE_URL ?? "http://localhost:3000";
for (const [route, expectedTitle] of [
  ["/", "Himanshu — Engineering Portfolio"],
  ["/work", "Work — Himanshu"],
  ["/work/soc-iq", "SOC-IQ — Himanshu"],
  ["/about", "About — Himanshu"],
]) {
  const response = await fetch(new URL(route, base), {
    signal: AbortSignal.timeout(15000),
  });
  assert.equal(response.status, 200, route);
  const html = await response.text();
  assert.ok(html.includes(expectedTitle), `${route}: metadata`);
  assert.match(html, /id="main-content"/, route);
  assert.match(html, /Skip to content/, route);
  assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1, route);
  assert.equal(
    response.headers.get("x-content-type-options"),
    "nosniff",
    route,
  );
  console.log(`PASS ${route}`);
}
for (const route of ["/work/not-a-project", "/missing-page"]) {
  const response = await fetch(new URL(route, base), {
    signal: AbortSignal.timeout(15000),
  });
  assert.equal(response.status, 404, `${route}: must be a real HTTP 404`);
  console.log(`PASS ${route} (404)`);
}
