// Typed contract for guide content modules. Content is static and imported at build time.

export type CalloutVariant = "important" | "decision" | "warning" | "implementation" | "draft";

export type GuideCardItem = {
  /** Short label such as "R1" or "01"; rendered as visible text (never color-only). */
  label?: string;
  title: string;
  text: string;
  /** Optional in-page anchor (e.g. "#threat") or canonical guide route. */
  href?: string;
};

export type GuideRoadmapItem = {
  label: string; // e.g. "2026", "Stage 1", "Next 6 months"
  title: string;
  text: string;
  points?: string[];
};

export type GuideBlock =
  | { type: "prose"; title?: string; paragraphs: string[] }
  | { type: "bullets"; title?: string; ordered?: boolean; items: string[] }
  | { type: "callout"; variant: CalloutVariant; title: string; paragraphs: string[]; items?: string[] }
  | { type: "cards"; title?: string; columns?: 2 | 3; items: GuideCardItem[] }
  | { type: "roadmap"; title?: string; items: GuideRoadmapItem[] }
  | {
      type: "table";
      caption: string;
      columns: string[];
      rows: string[][];
      /** Treat first cell in each row as a row header (th scope="row"). Default true. */
      rowHeaders?: boolean;
      note?: string;
    }
  | { type: "disclosure"; title: string; blocks: GuideBlock[] }
  /** Renders an H3 (or H4 when nested inside another subsection). */
  | { type: "subsection"; title: string; id?: string; blocks: GuideBlock[] };

export type GuideSection = {
  /** Stable kebab-case id, used for deep links and chapter nav. */
  id: string;
  title: string;
  /** Short label for the chapter nav; defaults to title. */
  navLabel?: string;
  intro?: string;
  blocks: GuideBlock[];
};

export type GuideReference = {
  title: string;
  publisher?: string;
  /** Only URLs that appear in the source document. */
  url?: string;
};

export type GuideContent = {
  id: "volume-1" | "volume-2" | "volume-3";
  /** Short purpose statement shown in the hero. */
  purpose: string;
  sections: GuideSection[];
  references: GuideReference[];
};

export type ReviewRegisterItem = {
  sourceSection: string;
  issue: string;
  disposition: "Qualified in web text" | "Omitted pending review" | "Retained as draft note" | "Needs author confirmation";
  webTreatment: string;
};
