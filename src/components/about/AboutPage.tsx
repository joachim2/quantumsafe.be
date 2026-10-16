import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

const coalition = siteConfig.partners[0]!;
const quantumCircle = siteConfig.partners[1]!;

export function AboutPage() {
  return <div className="starter-content site-container">
    <nav aria-label="Breadcrumb" className="mb-12 flex items-center gap-3 text-xs text-muted-foreground"><Link to={siteConfig.homeUrl}>Home</Link><ChevronRight className="size-3" /><span aria-current="page">About</span></nav>

    {/* Section A — Page introduction */}
    <p className="eyebrow mb-4 text-teal">{siteConfig.title}</p>
    <h1 className="section-heading max-w-3xl">About the initiative</h1>
    <p className="mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">Preparing for the quantum era requires collaboration, knowledge sharing and a coordinated approach to digital security. This platform brings together strategic, organisational and technical guidance to help organisations understand the quantum threat and prepare for the transition to post-quantum cryptography.</p>

    {/* Section B — Why this platform matters */}
    <section className="mt-16 border-t border-border pt-10" aria-labelledby="why-platform">
      <h2 id="why-platform" className="text-xl">Preparing organisations for the quantum era</h2>
      <p className="mt-4 max-w-2xl text-sm leading-8 text-muted-foreground">Quantum computing has important implications for some of the cryptographic technologies that protect digital communications, sensitive information and IT infrastructure today. Organisations need to understand these implications and prepare for the transition to post-quantum cryptography.</p>
      <p className="mt-4 max-w-2xl text-sm leading-8 text-muted-foreground">This knowledge platform provides a structured starting point, bringing together three complementary volumes that cover strategic awareness, transition planning and technical implementation.</p>
    </section>

    {/* Sections C & D — The organisations behind the initiative */}
    <div className="mt-16 grid gap-12 md:grid-cols-2">
      <section className="border-t border-border pt-10" aria-labelledby="about-coalition">
        <img src={coalition.logoUrl} alt={coalition.name} className={`${coalition.className} mb-6`} loading="lazy" />
        <h2 id="about-coalition" className="text-xl">{coalition.name}</h2>
        <p className="mt-4 text-sm leading-8 text-muted-foreground">The Cyber Security Coalition is a partnership between players from the academic world, the public authorities and the private sector, joining forces in the fight against cybercrime. Its mission is to bolster Belgium's cyber security resilience by building a strong cyber security ecosystem at national level, bringing together skills and expertise on a trust-based platform for information exchange and joint actions.</p>
        <Button asChild variant="link" className="mt-5 h-auto p-0 text-xs text-primary"><a href={coalition.websiteUrl} target="_blank" rel="noopener noreferrer">Visit {coalition.name}<ArrowUpRight /></a></Button>
      </section>
      <section className="border-t border-border pt-10" aria-labelledby="about-quantum-circle">
        <img src={quantumCircle.logoUrl} alt={quantumCircle.name} className={`${quantumCircle.className} mb-6`} loading="lazy" />
        <h2 id="about-quantum-circle" className="text-xl">{quantumCircle.name}</h2>
        <p className="mt-4 text-sm leading-8 text-muted-foreground">Quantum Circle is Belgium's non-profit quantum community, founded in 2024, where industry, academia, technology providers and government come together around one question: how will quantum impact my organisation? By connecting world-class research with business leaders and policymakers, the community encourages knowledge exchange and collaboration across the wider quantum ecosystem, in Belgium and beyond.</p>
        <Button asChild variant="link" className="mt-5 h-auto p-0 text-xs text-primary"><a href={quantumCircle.websiteUrl} target="_blank" rel="noopener noreferrer">Visit {quantumCircle.name}<ArrowUpRight /></a></Button>
      </section>
    </div>

    {/* Section E — The three-volume PQC guide */}
    <section className="mt-16 border-t border-border pt-10" aria-labelledby="about-volumes">
      <h2 id="about-volumes" className="text-xl">From awareness to implementation</h2>
      <p className="mt-4 max-w-2xl text-sm leading-8 text-muted-foreground">The platform organises its guidance into three complementary volumes, each aimed at a different step of the journey towards quantum readiness.</p>
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {siteConfig.volumes.map(volume => <article className="border-t border-border pt-6" key={volume.id}>
          <span className="text-[11px] text-teal">{volume.number}</span>
          <h3 className="mt-2 text-base">{volume.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{volume.description}</p>
          <Button asChild variant="link" className="mt-4 h-auto p-0 text-xs text-primary"><Link to={volume.pageUrl}>Read {volume.volumeLabel}<ArrowRight className="ml-1" /></Link></Button>
        </article>)}
      </div>
    </section>

    {/* Section F — A shared objective */}
    <section className="mt-16 border-t border-border pt-10" aria-labelledby="about-together">
      <h2 id="about-together" className="text-xl">Building quantum readiness together</h2>
      <p className="mt-4 max-w-2xl text-sm leading-8 text-muted-foreground">Preparing for post-quantum cryptography is a journey that involves multiple disciplines. Decision-makers need to understand the strategic implications, transition teams need to establish plans and priorities, and technical teams need to prepare for implementation.</p>
      <p className="mt-4 max-w-2xl text-sm leading-8 text-muted-foreground">This platform aims to make that journey easier to understand by providing a structured starting point for learning, planning and taking the next steps.</p>
    </section>
  </div>;
}
