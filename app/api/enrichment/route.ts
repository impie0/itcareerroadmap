import { NextResponse } from "next/server";
import { findCertification } from "@/lib/certifications-loader";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const vendor = searchParams.get("vendor") ?? "";
  const name = searchParams.get("name") ?? "";
  const code = searchParams.get("code") ?? "";
  if (!vendor || !name) {
    return NextResponse.json({ error: "vendor and name required" }, { status: 400 });
  }

  const cert = await findCertification({ vendor, name, code });
  if (cert) {
    return NextResponse.json({
      enrichment: cert,
      source: "certifications-folder",
      perCertPage: `/cert/${cert.vendorSlug.toLowerCase()}/${cert.codeSlug}`,
    });
  }
  return NextResponse.json({ enrichment: null, source: null });
}
