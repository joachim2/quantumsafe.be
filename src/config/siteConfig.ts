import coalitionLogo from "@/assets/logo_csc_png.png.asset.json";
import quantumLogo from "@/assets/quantum_circle_logo_2024_pos.svg.asset.json";
import volume1Pdf from "@/assets/volume-1-guide.pdf.asset.json";
import volume2Pdf from "@/assets/volume-2-guide.pdf.asset.json";
import volume2Workbook from "@/assets/volume-2-planning-workbook.xlsx.asset.json";

export type GuideStatus = "published" | "draft";
export type VolumeDefinition = {
  id: "volume-1" | "volume-2" | "volume-3";
  number: "01" | "02" | "03";
  volumeLabel: string;
  title: string;
  subtitle: string;
  description: string;
  /** Short audience sentence used on homepage cards. */
  audience: string;
  /** Audience chips used on the guide page. */
  audienceList: readonly string[];
  version: string;
  status: GuideStatus;
  publicationLabel: string;
  pageUrl: string;
  /** Independent PDF destination. Null until a real PDF is published. */
  pdfUrl: string | null;
  /** Planning workbook (Excel) download. Null when the volume publishes none. */
  workbookUrl: string | null;
  /** Priority calculator destination. Null when the volume publishes none. */
  calculatorUrl: string | null;
  theme: "understand" | "plan" | "implement";
  seo: { title: string; description: string };
};
/** PQC migration priority calculator destination, shared by config and Volume 2 references. */
export const priorityCalculatorUrl = "https://quantumsafe.be/prioritise/";


export const volumes = [
  { id: "volume-1", number: "01", volumeLabel: "Volume 01", title: "Preparing for the Quantum Era", subtitle: "Updated Strategic Guidance", description: "Understand the quantum threat, the strategic urgency of post-quantum cryptography, potential timelines and the first steps towards quantum readiness.", audience: "Decision-makers and organisational leaders.", audienceList: ["Decision-makers", "Executives", "CIOs", "CISOs", "IT leaders"], version: "Updated edition", status: "published", publicationLabel: "Published guidance", pageUrl: "/guides/preparing-for-the-quantum-era", pdfUrl: volume1Pdf.url, theme: "understand", seo: { title: "Volume 1: Preparing for the Quantum Era", description: "Strategic PQC guidance for decision-makers: the quantum threat, EU migration milestones for 2026, 2030 and 2035, nine strategic recommendations and an executive action plan." } },
  { id: "volume-2", number: "02", volumeLabel: "Volume 02", title: "Managing the PQC Transition", subtitle: "Governance, Planning and Investment", description: "Explore governance, responsibilities, risk management, planning and investment considerations for a structured transition to post-quantum cryptography.", audience: "Security, risk and compliance teams, project managers and transition coordinators.", audienceList: ["Security leadership", "GRC", "PMO", "Technical coordinators", "Procurement", "Audit"], version: "Version 3", status: "published", publicationLabel: "Published guidance", pageUrl: "/guides/managing-the-pqc-transition", pdfUrl: volume2Pdf.url, theme: "plan", seo: { title: "Volume 2: Managing the PQC Transition", description: "Governance, RACI, reference roadmap, business case, financial planning and risk-based prioritization for a structured post-quantum cryptography transition program." } },
  { id: "volume-3", number: "03", volumeLabel: "Volume 03", title: "Implementing the PQC Migration", subtitle: "Technical and Migration Guidance", description: "Discover the technical considerations involved in migration, including algorithms, architecture, interoperability, testing and operational implementation.", audience: "Engineers, developers, IT architects and IT operations teams.", audienceList: ["Engineers", "Developers", "Architects", "Platform owners", "PKI and HSM teams", "IT operations"], version: "0.7", status: "draft", publicationLabel: "Draft - ready for review", pageUrl: "/guides/implementing-the-pqc-migration", pdfUrl: null, theme: "implement", seo: { title: "Volume 3 (Draft v0.7): Implementing the PQC Migration", description: "Draft v0.7 technical guidance for engineers and operations: hybrid TLS, PKI, HSMs, cryptographic inventory, crypto-agility, testing and migration waves. Ready for review." } },
] as const satisfies readonly VolumeDefinition[];
export type Volume = VolumeDefinition;
export const routeAliases = {
  "/understand-pqc": volumes[0].pageUrl,
  "/plan-the-transition": volumes[1].pageUrl,
  "/implement-pqc": volumes[2].pageUrl,
} as const;
/** External Quantum Circle community forum destination. */
export const forumUrl = "https://community.quantumcircle.eu/c/feed-4469f7";
export type NavItem = { label: string; to: string; external?: boolean };
export const navigation: readonly NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Understand PQC", to: "/understand-pqc" },
  { label: "Plan the Transition", to: "/plan-the-transition" },
  { label: "Implement PQC", to: "/implement-pqc" },
  { label: "Forum", to: forumUrl, external: true },
  { label: "About", to: "/about" },
];
export type Resource = { title: string; description: string; category: string; date?: string; url: string };
export const siteConfig = {
  title: "PQC Knowledge Platform",
  description: "Strategic, organisational and technical guidance to help organisations prepare for the quantum era and post-quantum cryptography.",
  homeUrl: navigation[0]!.to,
  guideSectionId: "pqc-guide",
  navigation,
  volumes,
  routeAliases,
  partners: [
    { name: "Cyber Security Coalition", websiteUrl: "https://cybersecuritycoalition.be/", logoUrl: coalitionLogo.url, className: "coalition-logo" },
    { name: "Quantum Circle", websiteUrl: "https://quantumcircle.eu/", logoUrl: quantumLogo.url, className: "quantum-logo" },
  ],
  pathways: [
    { title: "For decision-makers", description: "Understand strategic urgency, organisational exposure and the actions needed to prepare.", cta: "Explore strategic guidance", pageUrl: volumes[0].pageUrl },
    { title: "For transition teams", description: "Understand governance, risk assessment, planning, prioritisation and investment.", cta: "Explore transition planning", pageUrl: volumes[1].pageUrl },
    { title: "For technical teams", description: "Explore technical considerations, algorithms, architecture, interoperability and implementation.", cta: "Explore technical guidance", pageUrl: volumes[2].pageUrl },
  ],
  resources: [] as Resource[],
  footer: {
    navigation,
    volumes,
    contact: { label: "Contact", url: "" },
    legalLinks: [{ label: "Privacy", url: "" }, { label: "Legal", url: "" }],
    copyrightText: "",
  },
  placeholderMessage: "Content for this page will be developed in a later round.",
};

/** Absolute origin used for canonical URLs, sitemap and structured data. */
export const siteUrl = "https://quantumsafe.be";

export function isConfiguredUrl(url: string | null | undefined): url is string {
  return Boolean(url && !url.includes("[") && !url.includes("]") && (/^https?:\/\//.test(url) || /^\/(?!\/)/.test(url)));
}
export function absoluteUrl(path: string) {
  return `${siteUrl}${path === "/" ? "" : path}`;
}
export function pageHead(title: string, description = siteConfig.description) {
  const pageTitle = `${title} | ${siteConfig.title}`;
  return { meta: [
    { title: pageTitle }, { name: "description", content: description },
    { property: "og:title", content: pageTitle }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] };
}
/** Head metadata for a canonical guide page: unique SEO, absolute canonical and breadcrumb JSON-LD. */
export function guideHead(volume: Volume) {
  const base = pageHead(volume.seo.title, volume.seo.description);
  const url = absoluteUrl(volume.pageUrl);
  return {
    meta: [...base.meta.map(m => ("property" in m && m.property === "og:type" ? { property: "og:type", content: "article" } : m)), { property: "og:url", content: url }],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: `${volume.volumeLabel}: ${volume.title}`, item: url },
      ],
    }) }],
  };
}
/** Canonical, indexable pages for the sitemap. Topic aliases are excluded on purpose. */
export const sitemapPaths = ["/", ...volumes.map(v => v.pageUrl), "/about"];