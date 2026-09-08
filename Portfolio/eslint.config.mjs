import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
export default defineConfig([
  ...nextVitals,
  ...nextTs,
  // Plain anchors deliberately keep navigation independent of client JS.
  { rules: { "@next/next/no-html-link-for-pages": "off" } },
  globalIgnores([".next/**", "next-env.d.ts", "coverage/**"]),
]);
