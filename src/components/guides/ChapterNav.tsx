import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { GuideSection } from "@/content/guides/types";

type NavItem = Pick<GuideSection, "id" | "title" | "navLabel">;

/** Sticky rail on desktop, native disclosure on smaller screens. Plain anchors; active state is an enhancement. */
export function ChapterNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-110px 0px -65% 0px" });
    items.forEach(item => { const el = document.getElementById(item.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [items]);

  const list = (
    <ol className="chapter-list">
      {items.map((item, index) => (
        <li key={item.id}>
          <a href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} data-active={active === item.id}>
            <span className="chapter-index">{String(index + 1).padStart(2, "0")}</span>
            <span>{item.navLabel ?? item.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <nav className="chapter-rail" aria-label="Chapters">
        <p className="eyebrow mb-4 text-muted-foreground">On this page</p>
        {list}
      </nav>
      <details className="chapter-compact">
        <summary><span>On this page</span><ChevronDown className="size-4" aria-hidden="true" /></summary>
        <nav aria-label="Chapters (compact)">{list}</nav>
      </details>
    </>
  );
}
