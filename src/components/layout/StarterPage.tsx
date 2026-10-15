import { Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

export function StarterPage({ title, volume }: { title: string; volume?: string }) {
  return <div className="starter-content site-container"><nav aria-label="Breadcrumb" className="mb-12 flex items-center gap-3 text-xs text-muted-foreground"><Link to={siteConfig.homeUrl}>Home</Link><ChevronRight className="size-3" /><span aria-current="page">{volume ? `Volume ${volume}` : title}</span></nav><p className="eyebrow mb-4 text-teal">{volume ? `THE PQC GUIDE · VOLUME ${volume}` : siteConfig.title}</p><h1 className="section-heading max-w-3xl">{title}</h1><div className="mt-9 border-t border-border pt-8"><p className="text-sm leading-7 text-muted-foreground">{siteConfig.placeholderMessage}</p></div><Button asChild variant="link" className="mt-8 px-0 text-teal"><Link to={siteConfig.homeUrl}><ArrowLeft />Back to home</Link></Button></div>;
}