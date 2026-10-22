import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isConfiguredUrl, type Resource } from "@/config/siteConfig";

const dateFormatter = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/** ISO dates render as a readable date; anything else is shown as supplied. */
function formatDate(date: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(date) ? dateFormatter.format(new Date(`${date}T00:00:00Z`)) : date;
}

export function ResourceCard({ resource }: { resource: Resource }) {
  const external = /^https?:\/\//.test(resource.url);
  return <article className="rounded-md border border-border p-6"><p className="eyebrow text-teal">{resource.category}</p><h3 className="mt-3 text-xl">{resource.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{resource.description}</p>{resource.date && <time className="mt-4 block text-xs text-muted-foreground" dateTime={resource.date}>{resource.dateLabel ?? formatDate(resource.date)}</time>}{isConfiguredUrl(resource.url) && <Button asChild variant="link" className="mt-4 px-0 text-teal"><a href={resource.url} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>Read more<ArrowUpRight /></a></Button>}</article>;
}
