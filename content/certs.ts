// Type definitions only.
// The matrix data itself is loaded from `Deep Dive/Certifications/*.md` via
// `lib/cert-data.ts` → `lib/certifications-loader.ts`. The legacy DOMAINS /
// ECOSYSTEMS / HARDWARE_ECOS static arrays were removed once the per-cert .md
// files became the single source of truth.

export type CertStatus = "active" | "retiring" | "beta" | "new" | "retired" | "unverified";

export interface Cert {
  vendor: string;
  name: string;
  code?: string;
  status?: CertStatus;
  url?: string;
  note?: string;
}

export interface Course {
  provider: string;
  name: string;
  url?: string;
}

export interface DomainLevel {
  level: "Entry" | "Associate" | "Professional" | "Expert";
  certs: Cert[];
  skills?: string[];
  courses?: Course[];
  jobs?: string[];
}

export interface Domain {
  id: string;
  name: string;
  color: string;
  blurb?: string;
  levels: DomainLevel[];
}

export interface Ecosystem extends Domain {
  kind: "saas" | "hardware";
}
