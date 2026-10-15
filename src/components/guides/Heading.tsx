import type { ReactNode } from "react";

export function Heading({ level, className, id, children }: { level: number; className?: string; id?: string; children: ReactNode }) {
  const Tag = `h${Math.min(Math.max(level, 2), 6)}` as "h2";
  return <Tag id={id} className={className}>{children}</Tag>;
}
