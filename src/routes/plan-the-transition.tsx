import { createFileRoute, redirect } from "@tanstack/react-router";
import { routeAliases } from "@/config/siteConfig";
export const Route = createFileRoute("/plan-the-transition")({ beforeLoad: () => { throw redirect({ to: routeAliases["/plan-the-transition"], statusCode: 301, replace: true }); } });