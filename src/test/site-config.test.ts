import { describe, expect, it } from "vitest";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "@/routeTree.gen";
import { siteConfig, routeAliases, isConfiguredUrl, forumUrl, priorityCalculatorUrl } from "@/config/siteConfig";
import { volume2 } from "@/content/guides/volume2";

describe("PQC site foundation", () => {
  it("matches every navigation and canonical volume destination", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const destination of [...siteConfig.navigation.filter(item => !item.external).map(item => item.to), ...siteConfig.volumes.map(volume => volume.pageUrl)]) {
      expect(router.matchRoutes(destination).at(-1)?.routeId).not.toBe(rootRouteId);
    }
  });
  it("maps topic aliases to the corresponding canonical volumes", () => {
    expect(Object.values(routeAliases)).toEqual(siteConfig.volumes.map(volume => volume.pageUrl));
  });
  it("keeps webpage and PDF URLs independent and placeholders non-clickable", () => {
    for (const volume of siteConfig.volumes) {
      expect(volume.pdfUrl).not.toEqual(volume.pageUrl);
      expect(isConfiguredUrl(volume.pageUrl)).toBe(true);
    }
    // Volumes 1 and 2 ship their official PDF; Volume 3 stays an unconfigured placeholder until published.
    expect(isConfiguredUrl(siteConfig.volumes[0].pdfUrl)).toBe(true);
    expect(isConfiguredUrl(siteConfig.volumes[1].pdfUrl)).toBe(true);
    expect(siteConfig.volumes[0].pdfUrl!.endsWith("volume-1-preparing-for-the-quantum-era.pdf")).toBe(true);
    expect(siteConfig.volumes[1].pdfUrl!.endsWith("volume-2-managing-the-pqc-transition.pdf")).toBe(true);
    expect(isConfiguredUrl(siteConfig.volumes[2].pdfUrl)).toBe(false);
    expect(isConfiguredUrl("")).toBe(false);
    expect(isConfiguredUrl("javascript:alert(1)")).toBe(false);
    expect(isConfiguredUrl("https://example.org/volume.pdf")).toBe(true);
    expect(isConfiguredUrl("/documents/volume.pdf")).toBe(true);
  });
  it("publishes the Volume 2 planning workbook and priority calculator only", () => {
    const [first, second, third] = siteConfig.volumes;
    expect(isConfiguredUrl(second.workbookUrl)).toBe(true);
    expect(second.workbookUrl!.endsWith("volume-2-planning-workbook.xlsx")).toBe(true);
    expect(second.workbookUrl).not.toEqual(second.pdfUrl);
    expect(second.workbookUrl).not.toEqual(second.pageUrl);
    expect(second.calculatorUrl).toBe("https://quantumsafe.be/prioritise/");
    expect(priorityCalculatorUrl).toBe("https://quantumsafe.be/prioritise/");
    expect([first, third].every(volume => volume.workbookUrl === null && volume.calculatorUrl === null)).toBe(true);
    // The Volume 2 reference list points at the same calculator destination as the config.
    expect(volume2.references.find(ref => ref.title === "PQC Migration Priority Calculator")?.url).toBe(priorityCalculatorUrl);
  });
  it("links Forum directly to the Quantum Circle community forum", () => {
    expect(forumUrl).toBe("https://community.quantumcircle.eu/c/feed-4469f7");
    const forumItems = siteConfig.navigation.filter(item => item.external);
    expect(forumItems).toHaveLength(1);
    expect(forumItems[0]).toMatchObject({ label: "Forum", to: forumUrl });
    expect(siteConfig.navigation.some(item => item.label === "Resources")).toBe(false);
    expect(siteConfig.footer.navigation).toBe(siteConfig.navigation);
  });
  it("publishes only the announced KU Leuven Continue news item", () => {
    expect(siteConfig.resources).toHaveLength(1);
    const [news] = siteConfig.resources;
    expect(news).toMatchObject({
      title: "Cyber Resilience Session 8: Post-quantum cryptography",
      category: "Event",
      date: "2026-11-26",
      url: "https://puc.kuleuven.be/nl/opleiding/cyber_resilience_series_2026-8adjxg90vegep574/",
    });
    expect(news!.description).toContain("Eric Michiels");
    expect(isConfiguredUrl(news!.url)).toBe(true);
  });
  it("links both partners to their official LinkedIn pages", () => {
    expect(siteConfig.partners.map(partner => partner.linkedInUrl)).toEqual([
      "https://be.linkedin.com/company/belgian-cyber-security-coalition",
      "https://be.linkedin.com/company/quantumcircleeu",
    ]);
    for (const partner of siteConfig.partners) {
      expect(isConfiguredUrl(partner.linkedInUrl)).toBe(true);
      expect(partner.linkedInUrl).not.toBe(partner.websiteUrl);
    }
  });
  it("names both responsible publishers from the white paper", () => {
    expect(siteConfig.responsiblePublisher).toEqual([
      { name: "Jan Sonck", role: "Quantum Ecosystem Manager", organisation: "Quantum Circle" },
      { name: "Henk Dujardin", role: "CEO", organisation: "Cyber Security Coalition" },
    ]);
  });
  it("does not invent contact and legal destinations", () => {
    expect(isConfiguredUrl(siteConfig.footer.contact.url)).toBe(false);
    expect(siteConfig.footer.legalLinks.every(link => !isConfiguredUrl(link.url))).toBe(true);
  });
});