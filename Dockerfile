ARG NODE_VERSION=22-alpine

FROM node:${NODE_VERSION} AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat openssl
COPY package.json package-lock.json* ./
COPY prisma ./prisma
RUN npm install --no-audit --no-fund
RUN npx prisma generate

FROM node:${NODE_VERSION} AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat openssl
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# Placeholder DATABASE_URL — required so @prisma/client imports during `next build`
# don't crash. The real URL is supplied at runtime via the env.
ENV DATABASE_URL=postgresql://placeholder:placeholder@placeholder:5432/placeholder?schema=public
# Re-run prisma generate against the current schema. Defends against a cached
# `deps` stage that was built against an older schema (e.g. before adding new models).
RUN npx prisma generate
RUN npm run build

FROM node:${NODE_VERSION} AS runner
WORKDIR /app
RUN apk add --no-cache openssl
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Install Prisma CLI globally — brings @prisma/engines with it. Needed so
# entrypoint can run `prisma db push` against the live postgres service at boot.
# Pinned to the same major as @prisma/client in package.json (^6.x) — Prisma 7
# changed schema format (no `url = env(...)` in datasource) which is a breaking
# change we'd need to opt into separately.
RUN npm install -g prisma@6 --no-audit --no-fund

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/@prisma/client ./node_modules/@prisma/client
COPY --chown=nextjs:nodejs docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

USER nextjs
EXPOSE 3000

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["node", "server.js"]
