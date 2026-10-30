import { createFileRoute } from "@tanstack/react-router";
import { CommunityPage } from "@/components/community/CommunityPage";
import { pageHead } from "@/config/siteConfig";

export const Route = createFileRoute("/community")({
  head: () => pageHead("Community", "Join the PQC community: connect with cybersecurity experts, researchers and peers, share best practices and collaborate on post-quantum cryptography challenges."),
  component: CommunityPage,
});
