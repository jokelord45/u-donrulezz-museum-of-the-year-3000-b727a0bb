import { mkdirSync, writeFileSync } from "node:fs";

// Museum of the Year 3000: one line, at most 200 characters — the museum
// label a museum in the year 3000 puts beside an ordinary object from
// today. A USB cable, misread as a ritual object: it only linked two
// machines when presented the correct way up, and the rite always took
// three attempts.
const ENTRY =
  "Ritual cord. It linked two machines only when presented the correct way up, a rite that took three attempts.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
