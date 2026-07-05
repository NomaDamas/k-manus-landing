import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { privacyPolicy } from "@/content/legal/privacy/privacy";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.summary,
};

export default function PrivacyPolicyPage() {
  return <LegalDocument content={privacyPolicy} />;
}
