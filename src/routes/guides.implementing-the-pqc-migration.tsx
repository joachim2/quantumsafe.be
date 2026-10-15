import { createFileRoute } from "@tanstack/react-router";
import { GuidePageShell } from "@/components/guides/GuidePageShell";
import { volumes, guideHead } from "@/config/siteConfig";
import { volume3 } from "@/content/guides/volume3";
const volume = volumes[2];
export const Route = createFileRoute("/guides/implementing-the-pqc-migration")({ head: () => guideHead(volume), component: Page });
function Page() { return <GuidePageShell volume={volume} content={volume3} />; }
