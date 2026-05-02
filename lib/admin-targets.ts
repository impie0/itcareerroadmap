/**
 * Maps an engagement `target` string to the public-site URL where that
 * cert / wiki article / vendor page / blog post lives. Used by the admin
 * moderation pages to make targets clickable.
 *
 * Format conventions used elsewhere in the app:
 *   cert:{vendorSlug}:{codeSlug}    -> /cert/{vendorSlug}/{codeSlug}
 *   wiki:{kind}:{slug}              -> /wiki/{kind}/{slug}
 *   vendor:{slug}                   -> /vendor/{slug}
 *   blog:{slug}                     -> /blog/{slug}
 *   role:{id}                       -> /profiles#{id}
 *   transition:{id}                 -> /paths#{id}
 *   changer:{id}                    -> /changers#{id}
 */

export function targetToPath(target: string): string | null {
  if (!target) return null;
  const parts = target.split(":");
  switch (parts[0]) {
    case "cert":   return parts.length === 3 ? `/cert/${parts[1]}/${parts[2]}` : null;
    case "wiki":   return parts.length === 3 ? `/wiki/${parts[1]}/${parts[2]}` : null;
    case "vendor": return parts.length === 2 ? `/vendor/${parts[1]}` : null;
    case "blog":   return parts.length === 2 ? `/blog/${parts[1]}` : null;
    case "role":       return parts.length === 2 ? `/profiles#${parts[1]}` : null;
    case "transition": return parts.length === 2 ? `/paths#${parts[1]}` : null;
    case "changer":    return parts.length === 2 ? `/changers#${parts[1]}` : null;
    default: return null;
  }
}

/**
 * Public-site origin (different hostname than the admin container).
 * Configured via env so dev (localhost:3000) and prod (itcareerroadmap.com)
 * both work without code changes.
 */
export function publicSiteOrigin(): string {
  return process.env.PUBLIC_SITE_URL || "https://itcareerroadmap.com";
}

export function targetToPublicUrl(target: string): string | null {
  const path = targetToPath(target);
  if (!path) return null;
  return publicSiteOrigin() + path;
}
