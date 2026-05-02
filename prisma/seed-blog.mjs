/* One-shot seed: inserts a "Hello world" example blog post if the BlogPost
   table is empty. Safe to run on every boot — it's a no-op once a post exists. */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SAMPLE = {
  slug: "welcome",
  title: "Welcome — this is the blog",
  excerpt: "Anonymous likes, comments, ratings, and feedback. Postgres-backed. Authored straight into the BlogPost table.",
  body: `# Welcome

This is an example post seeded into the \`BlogPost\` table the first time the
container starts. It lets you see what the blog reader looks like end-to-end
before you have any real content.

## How this works

The blog has no admin UI yet. To author a real post, insert a row directly into
the postgres \`BlogPost\` table. Required columns:

- \`slug\` (unique URL slug, lowercase-with-dashes)
- \`title\`
- \`excerpt\` (1–2 sentences shown on the index)
- \`body\` (full markdown)
- \`draft\` defaults to \`false\` — set to \`true\` to hide a post

Example via \`psql\`:

\`\`\`sql
INSERT INTO "BlogPost" (id, slug, title, excerpt, body, "publishedAt", "updatedAt")
VALUES (
  gen_random_uuid()::text,
  'my-first-post',
  'My first post',
  'Short summary that shows on the index page.',
  '# Hello

Markdown body goes here.',
  NOW(),
  NOW()
);
\`\`\`

## Engagement

Every post collects:

- ⭐ 1–5 star ratings (one per visitor, can be changed)
- 👍 anonymous likes
- 👍/👎 "was this useful?" with optional text suggestion
- Threaded comments (profanity-filtered, rate-limited)

All identifiers are IP-hashed — no accounts, no tracking.

## Delete this post

When you're ready, remove this seed:

\`\`\`sql
DELETE FROM "BlogPost" WHERE slug = 'welcome';
\`\`\`
`,
  draft: false,
};

async function main() {
  const count = await prisma.blogPost.count();
  if (count > 0) {
    console.log(`[seed-blog] BlogPost table already has ${count} row(s); skipping seed.`);
    return;
  }
  await prisma.blogPost.create({ data: SAMPLE });
  console.log("[seed-blog] inserted welcome post.");
}

main()
  .catch((err) => {
    console.error("[seed-blog] failed:", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
