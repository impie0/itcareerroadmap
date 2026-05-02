#!/bin/sh
set -e

# Apply Prisma schema to the postgres container before starting the app.
# `db push` is idempotent — safe to run on every boot. Uses the globally
# installed `prisma` CLI (installed in Dockerfile runner stage so it brings
# its own @prisma/engines).
echo "[entrypoint] applying prisma schema to postgres"
# --skip-generate: db push otherwise runs `prisma generate` after pushing,
# which tries to write to the global node_modules dir (we run as the nextjs
# user which doesn't have write permission there). The generated client is
# already baked into the image at build time, so we don't need it here.
prisma db push --schema=./prisma/schema.prisma --accept-data-loss --skip-generate

# Seed a welcome blog post if BlogPost table is empty (no-op otherwise)
if [ -f /app/prisma/seed-blog.mjs ]; then
  echo "[entrypoint] running blog seed"
  node /app/prisma/seed-blog.mjs || echo "[entrypoint] blog seed failed (non-fatal)"
fi

# Prune AdminAudit rows older than ADMIN_AUDIT_RETAIN_DAYS (default 90).
# Idempotent + non-fatal so a transient db hiccup doesn't block app startup.
if [ -f /app/prisma/prune-audit.mjs ]; then
  node /app/prisma/prune-audit.mjs || echo "[entrypoint] audit prune failed (non-fatal)"
fi

exec "$@"
