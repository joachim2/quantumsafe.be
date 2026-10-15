import { describe, expect, it } from "vitest";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "@/routeTree.gen";
import { siteConfig, routeAliases, isConfiguredUrl } from "@/config/siteConfig";

describe("PQC site foundation", () => {
  it("matches every navigation and canonical volume destination", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const destination of [...siteConfig.navigation.map(item => item.to), ...siteConfig.volumes.map(volume => volume.pageUrl)]) {
      expect(router.matchRoutes(destination).at(-1)?.routeId).not.toBe(rootRouteId);
    }
  });
  it("maps topic aliases to the corresponding canonical volumes", () => {
    expect(Object.values(routeAliases)).toEqual(siteConfig.volumes.map(volume => volume.pageUrl));
  });
  it("keeps webpage and PDF URLs independent and placeholders non-clickable", () => {
    for (const volume of siteConfig.volumes) {
      expect(volume.pdfUrl).not.toEqual(volume.pageUrl);
      expect(isConfiguredUrl(volume.pdfUrl)).toBe(false);
      expect(isConfiguredUrl(volume.pageUrl)).toBe(true);
    }
    expect(isConfiguredUrl("")).toBe(false);
    expect(isConfiguredUrl("javascript:alert(1)")).toBe(false);
    expect(isConfiguredUrl("https://example.org/volume.pdf")).toBe(true);
    expect(isConfiguredUrl("/documents/volume.pdf")).toBe(true);
  });
  it("does not invent resources or contact and legal destinations", () => {
    expect(siteConfig.resources).toHaveLength(0);
    expect(isConfiguredUrl(siteConfig.footer.contact.url)).toBe(false);
    expect(siteConfig.footer.legalLinks.every(link => !isConfiguredUrl(link.url))).toBe(true);
  });
});