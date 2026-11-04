/**
 * Copies reviewed screenshots (<dir>/<key>/NN.webp, captured from the running/live
 * sites) into public/shots/<key>/live-NN.webp and records them in
 * lib/live-shots.generated.json ({ <key>: [{src, from:"live"}] }). lib/projects.ts
 * puts these first in each project's gallery, ahead of images found inside the repo.
 *
 * Usage: node scripts/add-live-shots.mjs <dir>
 */
import { readdirSync, mkdirSync, copyFileSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";

const src = process.argv[2];
if (!src) throw new Error("usage: add-live-shots.mjs <dir>");
const map = {};
for (const d of readdirSync(src, { withFileTypes: true })) {
  if (!d.isDirectory()) continue;
  const out = join("public", "shots", d.name);
  mkdirSync(out, { recursive: true });
  for (const old of readdirSync(out)) if (old.startsWith("live-")) rmSync(join(out, old));
  map[d.name] = readdirSync(join(src, d.name))
    .filter((f) => /\.(webp|png|jpe?g)$/i.test(f))
    .sort()
    .map((f) => {
      copyFileSync(join(src, d.name, f), join(out, `live-${f}`));
      return { src: `shots/${d.name}/live-${f}`, from: "live" };
    });
  console.log(`${d.name}: ${map[d.name].length}`);
}
writeFileSync(join("lib", "live-shots.generated.json"), JSON.stringify(map, null, 2));
