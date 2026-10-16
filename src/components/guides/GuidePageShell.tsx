import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowLeft, ArrowRight, ChevronRight, Download, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isConfiguredUrl, siteConfig, type Volume } from "@/config/siteConfig";
import type { GuideContent } from "@/content/guides/types";
import { ChapterNav } from "./ChapterNav";
import { GuideSection } from "./GuideSection";
import { CoverArt } from "@/components/home/GuideSections";

export function GuideHero({ volume, purpose, firstSectionId }: { volume: Volume; purpose: string; firstSectionId: string }) {
  const isDraft = volume.status === "draft";
  const artIndex = siteConfig.volumes.findIndex(v => v.id === volume.id);
  return (
    <header className={`guide-hero ${volume.theme}`}>
      <CoverArt index={artIndex} />
      <div className="site-container relative">
        <nav aria-label="Breadcrumb" className="guide-breadcrumb">
          <ol>
            <li><Link to={siteConfig.homeUrl}>Home</Link><ChevronRight className="size-3" aria-hidden="true" /></li>
            <li><span aria-current="page">{volume.volumeLabel}</span></li>
          </ol>
        </nav>
        <p className="eyebrow mb-4 text-primary">{volume.volumeLabel}</p>
        <h1 className="guide-title">{volume.title}</h1>
        <p className="guide-subtitle">{volume.subtitle}</p>
        <p className="guide-purpose">{purpose}</p>
        <dl className="guide-meta">
          <div><dt>Audience</dt><dd><ul className="chip-list">{volume.audienceList.map(a => <li key={a} className="audience-chip">{a}</li>)}</ul></dd></div>
          <div><dt>Status</dt><dd><span className="status-chip" data-status={volume.status}>{isDraft && <PenLine className="size-3" aria-hidden="true" />}{volume.publicationLabel}</span></dd></div>
          <div><dt>Version</dt><dd>{isDraft ? `Draft v${volume.version}` : volume.version}</dd></div>
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="hero-cta mt-0"><a href={`#${firstSectionId}`}>Begin reading<ArrowDown className="ml-2" /></a></Button>
          {isConfiguredUrl(volume.pdfUrl) && (
            <Button asChild variant="outline" className="hero-cta hero-cta--outline mt-0"><a href={volume.pdfUrl} target="_blank" rel="noopener noreferrer">Download PDF<Download className="ml-2" /></a></Button>
          )}
        </div>
      </div>
    </header>
  );
}

export function DraftReviewNotice({ version }: { version: string }) {
  return (
    <aside className="guide-callout draft-notice" data-variant="draft" aria-label="Draft status">
      <p className="callout-label"><PenLine className="size-4" aria-hidden="true" />Draft - ready for review · Version {version}</p>
      <p className="guide-p">This is a draft web edition of Volume 3. Guidance may change before publication. Unresolved editorial material from the source draft is kept in a separate review register and is not presented here as settled guidance. Where content is still emerging it is marked as Track, Evaluate or Draft guidance.</p>
    </aside>
  );
}

export function GuidePageShell({ volume, content }: { volume: Volume; content: GuideContent }) {
  const index = siteConfig.volumes.findIndex(v => v.id === volume.id);
  const previous = index > 0 ? siteConfig.volumes[index - 1] : undefined;
  const next = index < siteConfig.volumes.length - 1 ? siteConfig.volumes[index + 1] : undefined;
  const navItems = [...content.sections, ...(content.references.length ? [{ id: "references", title: "References" }] : [])];
  return (
    <article className="guide-page">
      <GuideHero volume={volume} purpose={content.purpose} firstSectionId={content.sections[0]?.id ?? "references"} />
      <div className="site-container guide-layout">
        <ChapterNav items={navItems} />
        <div className="guide-content">
          {volume.status === "draft" && <DraftReviewNotice version={volume.version} />}
          {content.sections.map((section, i) => <GuideSection key={section.id} section={section} index={i} />)}
          {content.references.length > 0 && (
            <section id="references" className="guide-section" aria-labelledby="references-heading">
              <h2 id="references-heading" className="guide-h2">References</h2>
              <ol className="reference-list">
                {content.references.map(ref => (
                  <li key={ref.title}>
                    {isConfiguredUrl(ref.url) ? <a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.title}</a> : <span>{ref.title}</span>}
                    {ref.publisher && <span className="text-muted-foreground"> — {ref.publisher}</span>}
                  </li>
                ))}
              </ol>
            </section>
          )}
          <nav className="guide-pager" aria-label="Guide volumes">
            {previous ? <Link to={previous.pageUrl} className="pager-link"><span className="eyebrow text-muted-foreground"><ArrowLeft className="inline size-3" aria-hidden="true" /> Previous · {previous.volumeLabel}</span><span className="pager-title">{previous.title}</span></Link> : <span />}
            {next && <Link to={next.pageUrl} className="pager-link next"><span className="eyebrow text-muted-foreground">Next · {next.volumeLabel} <ArrowRight className="inline size-3" aria-hidden="true" /></span><span className="pager-title">{next.title}{next.status === "draft" ? ` (Draft v${next.version})` : ""}</span></Link>}
          </nav>
        </div>
      </div>
    </article>
  );
}
