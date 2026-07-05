import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { termsOfService } from "@/content/legal/terms/terms";

export const metadata: Metadata = {
  title: termsOfService.title,
  description: termsOfService.summary,
};

export default function TermsOfServicePage() {
  return <LegalDocument content={termsOfService} />;
}
