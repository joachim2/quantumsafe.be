import type { GuideRoadmapItem } from "@/content/guides/types";
import { Heading } from "./Heading";

/** Semantic ordered list, styled as a horizontal timeline on wide screens and vertical on mobile. */
export function GuideRoadmap({ items, title, level }: { items: GuideRoadmapItem[]; title?: string | undefined; level: number }) {
  const itemLevel = title ? level + 1 : level;
  return (
    <div className="guide-block">
      {title && <Heading level={level} className="guide-h3">{title}</Heading>}
      <ol className="guide-roadmap" data-count={Math.min(items.length, 5)}>
        {items.map(item => (
          <li key={item.label + item.title} className="roadmap-step">
            <span className="roadmap-label">{item.label}</span>
            <Heading level={itemLevel} className="roadmap-title">{item.title}</Heading>
            <p className="guide-p">{item.text}</p>
            {item.points && <ul className="guide-list">{item.points.map(point => <li key={point}>{point}</li>)}</ul>}
          </li>
        ))}
      </ol>
    </div>
  );
}
