import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { refundPolicy } from "@/content/legal/refund/refund";

export const metadata: Metadata = {
  title: refundPolicy.title,
  description: refundPolicy.summary,
};

export default function RefundPolicyPage() {
  return <LegalDocument content={refundPolicy} />;
}
