import type { JourneyEntry } from "../../lib/content/types";
// Add only confirmed entries; the UI renders an honest empty state until then.
export const journey: readonly JourneyEntry[] = [];
