/**
 * Pulls every repo of the GitHub user (public + private, excluding EXCLUDE patterns)
 * via the `gh` CLI, saves metadata (NO README text) into lib/repos.generated.json and
 * downloads up to MAX_IMG screenshots per repo into public/shots/<repo>/.
 *
 * Run:  node scripts/sync-repos.mjs        (requires an authenticated `gh`)
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync, existsSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";

const OWNER = "rizkiwk";
// Repos never shown on the public site. Client/NDA-sensitive names are NOT committed:
// pass them at run time, e.g.  HIDE_REPOS="repo-a,repo-b" node scripts/sync-repos.mjs
const HIDE = (process.env.HIDE_REPOS || "").split(",").map((x) => x.trim()).filter(Boolean);
// Curated out of the portfolio (low signal / not portfolio-worthy).
const CURATED_OUT = ["laravel_angular_blog","backend-repo","frontend-repo","anyscience","github-final-project","senter-privacy","vm-api","blindbox-bot","Root","Skylens"];
const EXCLUDE = [/^kingdom-science/i, /^ks-/i, /^rizkiwk-cv$/, /^rizkiwk$/, ...CURATED_OUT.map((n) => new RegExp(`^${n}$`, "i")), ...HIDE.map((n) => new RegExp(`^${n}$`))];
const MAX_IMG = 8;
const MIN_BYTES = 15_000, MAX_BYTES = 3_000_000;
const IMG_RE = /\.(png|jpe?g|webp|gif)$/i;
const SKIP_PATH = /(node_modules|\/res\/(mipmap|drawable)|\.xcassets|android\/app\/src|ios\/Runner|favicon|apple-touch|icon|logo|badge|\.github\/|fonts?\/|emoji|sprite|tile|texture|lottie)/i;
const PREFER = /(screenshot|screenshots|shots|gallery|preview|docs?\/|assets\/images|images\/|mockup|demo)/i;

const gh = (args, raw = false) =>
  execFileSync("gh", args, { encoding: raw ? "buffer" : "utf8", maxBuffer: 64e6 });
const api = (p, extra = []) => JSON.parse(gh(["api", p, ...extra]));
const apiRaw = (p) => gh(["api", "-H", "Accept: application/vnd.github.raw", p], true);

const repos = api("user/repos?per_page=100&affiliation=owner", ["--paginate"])
  .filter((r) => !r.fork && !EXCLUDE.some((re) => re.test(r.name)));

const out = [];
const shotsRoot = join("public", "shots");
for (const r of repos) {
  process.stderr.write(`${r.name} ... `);

  let images = [];
  try {
    const tree = api(`repos/${OWNER}/${r.name}/git/trees/HEAD?recursive=1`).tree || [];
    const cands = tree
      .filter((t) => t.type === "blob" && IMG_RE.test(t.path) && !SKIP_PATH.test(t.path))
      .filter((t) => t.size >= MIN_BYTES && t.size <= MAX_BYTES)
      .sort((a, b) => (PREFER.test(b.path) ? 1 : 0) - (PREFER.test(a.path) ? 1 : 0) || a.path.localeCompare(b.path))
      .slice(0, MAX_IMG);
    if (cands.length) {
      const dir = join(shotsRoot, r.name);
      rmSync(dir, { recursive: true, force: true });
      mkdirSync(dir, { recursive: true });
      for (const c of cands) {
        const ext = c.path.match(IMG_RE)[1].toLowerCase().replace("jpeg", "jpg");
        const file = `${images.length + 1}.${ext}`;
        try {
          writeFileSync(join(dir, file), apiRaw(`repos/${OWNER}/${r.name}/contents/${encodeURI(c.path)}`));
          images.push({ src: `shots/${r.name}/${file}`, from: c.path });
        } catch {}
      }
    }
  } catch {}
  process.stderr.write(`images=${images.length}\n`);

  out.push({
    name: r.name,
    description: r.description || "",
    language: r.language || "",
    topics: r.topics || [],
    visibility: r.private ? "private" : "public",
    url: r.private ? undefined : r.html_url,
    homepage: r.homepage || undefined,
    stars: r.stargazers_count,
    createdAt: r.created_at.slice(0, 10),
    pushedAt: r.pushed_at.slice(0, 10),
    sizeKb: r.size,
    images,
  });
}
out.sort((a, b) => b.pushedAt.localeCompare(a.pushedAt));
writeFileSync(join("lib", "repos.generated.json"), JSON.stringify(out, null, 2));
console.error(`\n${out.length} repos written; images in ${shotsRoot}`);
