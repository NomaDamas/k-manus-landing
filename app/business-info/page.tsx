import type { Metadata } from "next";
import { BusinessInfoDocument } from "@/components/business-info/BusinessInfoDocument";
import { businessInfo } from "@/content/business-info/business-info";

export const metadata: Metadata = {
  title: businessInfo.title,
  description: businessInfo.summary,
};

export default function BusinessInfoPage() {
  return <BusinessInfoDocument content={businessInfo} />;
}
