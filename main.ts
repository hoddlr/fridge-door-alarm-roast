import { mkdirSync, writeFileSync } from "node:fs";

// One line, one laugh: a single roast of my own fridge, written to /output/entry.txt.
const line =
  "My fridge beeps if I leave its door open too long, like it's the only thing in this house with boundaries.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
