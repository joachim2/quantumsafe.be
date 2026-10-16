import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/about/AboutPage";
import { pageHead } from "@/config/siteConfig";
export const Route = createFileRoute("/about")({ head: () => pageHead("About the initiative", "The PQC knowledge initiative bringing together Cyber Security Coalition and Quantum Circle."), component: AboutPage });
