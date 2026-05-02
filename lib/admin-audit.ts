import { prisma } from "@/lib/db";
import { getIpHash } from "@/lib/ratelimit";

/**
 * Record an admin moderation action. Best-effort — never throws (audit must
 * never block a legitimate moderation action). Caller awaits but failures
 * are swallowed and only logged to the server console.
 */
export async function logAdminAction(
  action: string,
  target?: string | null,
  meta?: Record<string, unknown>,
): Promise<void> {
  try {
    const ipHash = await getIpHash();
    await prisma.adminAudit.create({
      data: {
        action,
        target: target || null,
        meta: meta ? JSON.stringify(meta) : null,
        ipHash,
      },
    });
  } catch (err) {
    console.error("[admin-audit] failed to log action", action, err);
  }
}
