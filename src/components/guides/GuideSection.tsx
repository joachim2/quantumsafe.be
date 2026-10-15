import { Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowUpRight, Info, Lightbulb, PenLine, Wrench } from "lucide-react";
import type { CalloutVariant, GuideBlock, GuideCardItem, GuideSection as Section } from "@/content/guides/types";
import { GuideDataTable } from "./GuideDataTable";
import { GuideRoadmap } from "./GuideRoadmap";
import { Heading } from "./Heading";

const calloutMeta: Record<CalloutVariant, { label: string; Icon: typeof Info }> = {
  important: { label: "Important", Icon: Info },
  decision: { label: "Decision point", Icon: Lightbulb },
  warning: { label: "Caution", Icon: AlertTriangle },
  implementation: { label: "Implementation note", Icon: Wrench },
  draft: { label: "Draft guidance", Icon: PenLine },
};

export function Callout({ variant, title, paragraphs, items, level }: { variant: CalloutVariant; title: string; paragraphs: string[]; items?: string[]; level: number }) {
  const { label, Icon } = calloutMeta[variant];
  return (
    <aside className="guide-callout" data-variant={variant} aria-label={`${label}: ${title}`}>
      <p className="callout-label"><Icon className="size-4" aria-hidden="true" />{label}</p>
      <Heading level={level} className="callout-title">{title}</Heading>
      {paragraphs.map(text => <p key={text} className="guide-p">{text}</p>)}
      {items && <ul className="guide-list">{items.map(item => <li key={item}>{item}</li>)}</ul>}
    </aside>
  );
}

function CardLink({ href, title }: { href: string; title: string }) {
  const inner = <>Read more<ArrowUpRight className="size-3.5" aria-hidden="true" /><span className="sr-only">: {title}</span></>;
  if (href.startsWith("#")) return <a className="card-link" href={href}>{inner}</a>;
  const [to, hash] = href.split("#");
  return <Link className="card-link" to={to as "/"} {...(hash ? { hash } : {})}>{inner}</Link>;
}

export function RecommendationGrid({ items, title, columns = 3, level }: { items: GuideCardItem[]; title?: string | undefined; columns?: 2 | 3 | undefined; level: number }) {
  const itemLevel = title ? level + 1 : level;
  return (
    <div className="guide-block">
      {title && <Heading level={level} className="guide-h3">{title}</Heading>}
      <ul className="guide-cards" data-columns={columns}>
        {items.map(item => (
          <li key={(item.label ?? "") + item.title} className="guide-card">
            {item.label && <span className="card-label">{item.label}</span>}
            <Heading level={itemLevel} className="card-title">{item.title}</Heading>
            <p className="guide-p">{item.text}</p>
            {item.href && <CardLink href={item.href} title={item.title} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function GuideBlocks({ blocks, level }: { blocks: GuideBlock[]; level: number }) {
  return <>{blocks.map((block, index) => <BlockView key={index} block={block} level={level} />)}</>;
}

function BlockView({ block, level }: { block: GuideBlock; level: number }) {
  switch (block.type) {
    case "prose":
      return <>{block.title && <Heading level={level} className="guide-h3">{block.title}</Heading>}{block.paragraphs.map(text => <p key={text} className="guide-p">{text}</p>)}</>;
    case "bullets": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <div className="guide-block">
          {block.title && <Heading level={level} className="guide-h3">{block.title}</Heading>}
          <List className={block.ordered ? "guide-list ordered" : "guide-list"}>{block.items.map(item => <li key={item}>{item}</li>)}</List>
        </div>
      );
    }
    case "callout":
      return <Callout {...block} level={level} />;
    case "cards":
      return <RecommendationGrid items={block.items} title={block.title} columns={block.columns} level={level} />;
    case "roadmap":
      return <GuideRoadmap items={block.items} title={block.title} level={level} />;
    case "table":
      return <GuideDataTable caption={block.caption} columns={block.columns} rows={block.rows} rowHeaders={block.rowHeaders} note={block.note} />;
    case "disclosure":
      return (
        <details className="guide-disclosure">
          <summary>{block.title}</summary>
          <div className="disclosure-body"><GuideBlocks blocks={block.blocks} level={level} /></div>
        </details>
      );
    case "subsection":
      return (
        <div className="guide-subsection" id={block.id}>
          <Heading level={level} className={level === 3 ? "guide-h3" : "guide-h4"}>{block.title}</Heading>
          <GuideBlocks blocks={block.blocks} level={level + 1} />
        </div>
      );
  }
}

export function GuideSection({ section, index }: { section: Section; index: number }) {
  return (
    <section id={section.id} className="guide-section" aria-labelledby={`${section.id}-heading`}>
      <p className="eyebrow mb-3 text-teal">Chapter {String(index + 1).padStart(2, "0")}</p>
      <h2 id={`${section.id}-heading`} className="guide-h2">{section.title}</h2>
      {section.intro && <p className="guide-lead">{section.intro}</p>}
      <GuideBlocks blocks={section.blocks} level={3} />
    </section>
  );
}
