export type DeepDiveKind = "domain" | "ecosystem" | "roadmap" | "industry" | "specialty";

export interface DeepDiveCert {
  vendor: string;
  name: string;
  code: string;
  level: "Entry" | "Associate" | "Professional" | "Expert";
  tier?: string;
  duration?: string;
  questions?: string;
  passingScore?: string;
  cost?: string;
  validity?: string;
  retirementDate?: string;
  url: string;
  examGuideUrl?: string;
  objectivesUrl?: string;
  topics?: string[];
  rationale?: string;
  prepTime?: string;
  updates2026?: string;
  status?: "active" | "new" | "retiring" | "retired" | "beta";
}

export interface DeepDiveSalaryRow {
  role: string;
  cert?: string;
  region: string;
  low: number;
  high: number;
  currency: string;
  source?: string;
}

export interface DeepDiveResource {
  name: string;
  provider?: string;
  url: string;
  description?: string;
}

export interface DeepDiveBook {
  title: string;
  author?: string;
  publisher?: string;
  url?: string;
}

export interface DeepDiveSource {
  name: string;
  url: string;
}

export interface DeepDivePage {
  slug: string;
  kind: DeepDiveKind;
  code: string;
  title: string;
  blurb: string;
  lastUpdated: string;
  tags: string[];
  stats: { label: string; value: string }[];
  prose: { overview: string; trends?: string };
  salaryByRole: DeepDiveSalaryRow[];
  certs: DeepDiveCert[];
  resources: {
    free: DeepDiveResource[];
    paid: DeepDiveResource[];
    books: DeepDiveBook[];
    youtube: DeepDiveResource[];
    conferences: DeepDiveResource[];
  };
  sources: DeepDiveSource[];
}
