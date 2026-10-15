import { createFileRoute, redirect } from "@tanstack/react-router";
import { routeAliases } from "@/config/siteConfig";
export const Route = createFileRoute("/understand-pqc")({ beforeLoad: () => { throw redirect({ to: routeAliases["/understand-pqc"], statusCode: 301, replace: true }); } });