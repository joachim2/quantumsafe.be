import { createFileRoute } from "@tanstack/react-router";
import { StarterPage } from "@/components/layout/StarterPage";
import { siteConfig, pageHead } from "@/config/siteConfig";
const title = siteConfig.navigation[5].label;
export const Route = createFileRoute("/about")({ head: () => pageHead(title, "The PQC knowledge initiative bringing together Cyber Security Coalition and Quantum Circle."), component: Page });
function Page() { return <StarterPage title={title} />; }