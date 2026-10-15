import { createFileRoute, redirect } from "@tanstack/react-router";
import { routeAliases } from "@/config/siteConfig";
export const Route = createFileRoute("/implement-pqc")({ beforeLoad: () => { throw redirect({ to: routeAliases["/implement-pqc"], statusCode: 301, replace: true }); } });