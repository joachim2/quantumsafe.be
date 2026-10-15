import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home/HomePage";
import { pageHead } from "@/config/siteConfig";
export const Route = createFileRoute("/")({
  head: () => pageHead("Preparing for the Quantum Era"),
  component: HomePage,
});
