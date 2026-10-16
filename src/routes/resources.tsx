import { createFileRoute, redirect } from "@tanstack/react-router";
import { forumUrl, pageHead } from "@/config/siteConfig";

// Legacy /resources URL: the Resources section was replaced by the external
// Quantum Circle community forum, so old bookmarks land there directly.
export const Route = createFileRoute("/resources")({
  beforeLoad: () => {
    throw redirect({ href: forumUrl });
  },
  head: () => pageHead("Forum", "The Quantum Circle community forum."),
});
