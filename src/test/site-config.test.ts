import { describe, expect, it } from "vitest";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "@/routeTree.gen";
import { siteConfig, routeAliases, isConfiguredUrl, forumUrl } from "@/config/siteConfig";

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
  it("links Forum directly to the Quantum Circle community forum", () => {
    expect(forumUrl).toBe("https://community.quantumcircle.eu/c/feed-4469f7");
    const forumItems = siteConfig.navigation.filter(item => item.external);
    expect(forumItems).toHaveLength(1);
    expect(forumItems[0]).toMatchObject({ label: "Forum", to: forumUrl });
    expect(siteConfig.navigation.some(item => item.label === "Resources")).toBe(false);
    expect(siteConfig.footer.navigation).toBe(siteConfig.navigation);
  });
  it("does not invent resources or contact and legal destinations", () => {
    expect(siteConfig.resources).toHaveLength(0);
    expect(isConfiguredUrl(siteConfig.footer.contact.url)).toBe(false);
    expect(siteConfig.footer.legalLinks.every(link => !isConfiguredUrl(link.url))).toBe(true);
  });
});