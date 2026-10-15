import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isConfiguredUrl, type Resource } from "@/config/siteConfig";

export function ResourceCard({ resource }: { resource: Resource }) {
  return <article className="rounded-md border border-border p-6"><p className="eyebrow text-teal">{resource.category}</p><h3 className="mt-3 text-xl">{resource.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{resource.description}</p>{resource.date && <time className="mt-4 block text-xs text-muted-foreground" dateTime={resource.date}>{resource.date}</time>}{isConfiguredUrl(resource.url) && <Button asChild variant="link" className="mt-4 px-0 text-teal"><a href={resource.url}>Read more<ArrowUpRight /></a></Button>}</article>;
}