import type { GuideRoadmapItem } from "@/content/guides/types";

export function GuideRoadmap({ items, title, headingLevel = 3 }: { items: GuideRoadmapItem[]; title?: string; headingLevel?: 3 | 4 }) {
  const Item = headingLevel === 3 ? "h3" : "h4";
  const Title = headingLevel === 3 ? "h3" : "h4";
  return (
    <div className="guide-block">
      {title && <Title className="guide-h3">{title}</Title>}
      <ol className="guide-roadmap" data-count={items.length}>
        {items.map(item => (
          <li key={item.label + item.title} className="roadmap-step">
            <span className="roadmap-label">{item.label}</span>
            <Item className="roadmap-title">{item.title}</Item>
            <p className="guide-p">{item.text}</p>
            {item.points && <ul className="guide-list">{item.points.map(point => <li key={point}>{point}</li>)}</ul>}
          </li>
        ))}
      </ol>
    </div>
  );
}
