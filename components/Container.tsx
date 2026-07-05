import type { ReactNode } from "react";

/**
 * Shared max-width content wrapper. Reuse this in any new page (pricing,
 * legal, business-info) instead of hardcoding a max-width so page widths
 * stay consistent across the site.
 */
export function Container({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main";
}) {
  return (
    <Tag
      className={className}
      style={{
        width: "100%",
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 24px",
      }}
    >
      {children}
    </Tag>
  );
}
