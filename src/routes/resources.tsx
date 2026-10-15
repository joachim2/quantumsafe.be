import { createFileRoute } from "@tanstack/react-router";
import { StarterPage } from "@/components/layout/StarterPage";
import { siteConfig, pageHead } from "@/config/siteConfig";
const title = siteConfig.navigation[4].label;
export const Route = createFileRoute("/resources")({ head: () => pageHead(title, "PQC insights and resources for organisations preparing for the quantum era."), component: Page });
function Page() { return <StarterPage title={title} />; }