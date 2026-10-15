import { createFileRoute } from "@tanstack/react-router";
import { StarterPage } from "@/components/layout/StarterPage";
import { volumes, pageHead } from "@/config/siteConfig";
const volume = volumes[0];
export const Route = createFileRoute("/guides/preparing-for-the-quantum-era")({ head: () => pageHead(volume.title, volume.description), component: Page });
function Page() { return <StarterPage title={volume.title} volume={volume.number} />; }