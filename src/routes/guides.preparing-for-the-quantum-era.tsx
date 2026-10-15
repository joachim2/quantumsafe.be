import { createFileRoute } from "@tanstack/react-router";
import { GuidePageShell } from "@/components/guides/GuidePageShell";
import { volumes, guideHead } from "@/config/siteConfig";
import { volume1 } from "@/content/guides/volume1";
const volume = volumes[0];
export const Route = createFileRoute("/guides/preparing-for-the-quantum-era")({ head: () => guideHead(volume), component: Page });
function Page() { return <GuidePageShell volume={volume} content={volume1} />; }
