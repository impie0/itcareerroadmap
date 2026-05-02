/* Deletes AdminAudit entries older than 90 days. Idempotent — safe to run on
   every container boot. Best-effort; failures are logged but don't block startup. */

import { PrismaClient } from "@prisma/client";

const RETAIN_DAYS = Number(process.env.ADMIN_AUDIT_RETAIN_DAYS ?? 90);
const cutoff = new Date(Date.now() - RETAIN_DAYS * 24 * 60 * 60 * 1000);

const prisma = new PrismaClient();

try {
  const result = await prisma.adminAudit.deleteMany({
    where: { createdAt: { lt: cutoff } },
  });
  if (result.count > 0) {
    console.log(`[prune-audit] removed ${result.count} AdminAudit row(s) older than ${RETAIN_DAYS} days`);
  }
} catch (err) {
  console.error("[prune-audit] failed (non-fatal):", err);
} finally {
  await prisma.$disconnect();
}
