import coalitionLogo from "@/assets/logo_csc_png.png.asset.json";
import quantumLogo from "@/assets/quantum_circle_logo_2024_pos.svg.asset.json";

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
  theme: "understand" | "plan" | "implement";
  seo: { title: string; description: string };
};

export const volumes = [
  { id: "volume-1", number: "01", volumeLabel: "Volume 01", title: "Preparing for the Quantum Era", subtitle: "Updated Strategic Guidance", description: "Understand the quantum threat, the strategic urgency of post-quantum cryptography, potential timelines and the first steps towards quantum readiness.", audience: "Decision-makers and organisational leaders.", audienceList: ["Decision-makers", "Executives", "CIOs", "CISOs", "IT leaders"], version: "Updated edition", status: "published", publicationLabel: "Published guidance", pageUrl: "/guides/preparing-for-the-quantum-era", pdfUrl: null, theme: "understand", seo: { title: "Volume 1: Preparing for the Quantum Era", description: "Strategic PQC guidance for decision-makers: the quantum threat, EU migration milestones for 2026, 2030 and 2035, nine strategic recommendations and an executive action plan." } },
  { id: "volume-2", number: "02", volumeLabel: "Volume 02", title: "Managing the PQC Transition", subtitle: "Governance, Planning and Investment", description: "Explore governance, responsibilities, risk management, planning and investment considerations for a structured transition to post-quantum cryptography.", audience: "Security, risk and compliance teams, project managers and transition coordinators.", audienceList: ["Security leadership", "GRC", "PMO", "Technical coordinators", "Procurement", "Audit"], version: "Version 3", status: "published", publicationLabel: "Published guidance", pageUrl: "/guides/managing-the-pqc-transition", pdfUrl: null, theme: "plan", seo: { title: "Volume 2: Managing the PQC Transition", description: "Governance, RACI, reference roadmap, business case, financial planning and risk-based prioritization for a structured post-quantum cryptography transition program." } },
  { id: "volume-3", number: "03", volumeLabel: "Volume 03", title: "Implementing the PQC Migration", subtitle: "Technical and Migration Guidance", description: "Discover the technical considerations involved in migration, including algorithms, architecture, interoperability, testing and operational implementation.", audience: "Engineers, developers, IT architects and IT operations teams.", audienceList: ["Engineers", "Developers", "Architects", "Platform owners", "PKI and HSM teams", "IT operations"], version: "0.7", status: "draft", publicationLabel: "Draft - ready for review", pageUrl: "/guides/implementing-the-pqc-migration", pdfUrl: null, theme: "implement", seo: { title: "Volume 3 (Draft v0.7): Implementing the PQC Migration", description: "Draft v0.7 technical guidance for engineers and operations: hybrid TLS, PKI, HSMs, cryptographic inventory, crypto-agility, testing and migration waves. Ready for review." } },
] as const satisfies readonly VolumeDefinition[];
export type Volume = VolumeDefinition;
export const routeAliases = {
  "/understand-pqc": volumes[0].pageUrl,
  "/plan-the-transition": volumes[1].pageUrl,
  "/implement-pqc": volumes[2].pageUrl,
} as const;
export const navigation = [
  { label: "Home", to: "/" },
  { label: "Understand PQC", to: "/understand-pqc" },
  { label: "Plan the Transition", to: "/plan-the-transition" },
  { label: "Implement PQC", to: "/implement-pqc" },
  { label: "Resources", to: "/resources" },
  { label: "About", to: "/about" },
] as const;
export type Resource = { title: string; description: string; category: string; date?: string; url: string };
export const siteConfig = {
  title: "PQC Knowledge Platform",
  description: "Strategic, organisational and technical guidance to help organisations prepare for the quantum era and post-quantum cryptography.",
  homeUrl: navigation[0].to,
  guideSectionId: "pqc-guide",
  navigation,
  volumes,
  routeAliases,
  partners: [
    { name: "Cyber Security Coalition", websiteUrl: "https://cybersecuritycoalition.be/", logoUrl: coalitionLogo.url, className: "coalition-logo" },
    { name: "Quantum Circle", websiteUrl: "https://quantumcircle.eu/", logoUrl: quantumLogo.url, className: "quantum-logo" },
  ],
  principles: [
    { title: "Understand the threat", description: "Learn why quantum computing matters for today's cryptography." },
    { title: "Plan the transition", description: "Explore governance, risk, planning and investment considerations." },
    { title: "Prepare for implementation", description: "Discover the technical and operational aspects of PQC migration." },
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

export function isConfiguredUrl(url: string): boolean {
  return Boolean(url && !url.includes("[") && !url.includes("]") && (/^https?:\/\//.test(url) || /^\/(?!\/)/.test(url)));
}
export function pageHead(title: string, description = siteConfig.description) {
  const pageTitle = `${title} | ${siteConfig.title}`;
  return { meta: [
    { title: pageTitle }, { name: "description", content: description },
    { property: "og:title", content: pageTitle }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] };
}