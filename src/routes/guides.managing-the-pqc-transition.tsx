import { createFileRoute } from "@tanstack/react-router";
import { GuidePageShell } from "@/components/guides/GuidePageShell";
import { volumes, guideHead } from "@/config/siteConfig";
import { volume2 } from "@/content/guides/volume2";
const volume = volumes[1];
export const Route = createFileRoute("/guides/managing-the-pqc-transition")({ head: () => guideHead(volume), component: Page });
function Page() { return <GuidePageShell volume={volume} content={volume2} />; }
