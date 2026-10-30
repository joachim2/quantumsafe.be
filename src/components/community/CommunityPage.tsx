import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ChevronRight, MessagesSquare, Lightbulb, Users, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { forumUrl, siteConfig } from "@/config/siteConfig";

const goals = [
  { icon: Users, title: "Connect with peers", description: "Meet cybersecurity experts, researchers and organisations working on post-quantum readiness." },
  { icon: Lightbulb, title: "Share insights", description: "Exchange best practices, lessons learned and practical experience from real-world PQC transitions." },
  { icon: MessagesSquare, title: "Collaborate on challenges", description: "Discuss concrete post-quantum cryptography challenges together and learn from how others approach them." },
  { icon: CalendarDays, title: "Stay informed", description: "Follow community initiatives, events and new guidance as the quantum-safe ecosystem grows." },
] as const;

export function CommunityPage() {
  return <div className="starter-content site-container">
    <nav aria-label="Breadcrumb" className="mb-12 flex items-center gap-3 text-xs text-muted-foreground"><Link to={siteConfig.homeUrl}>Home</Link><ChevronRight className="size-3" /><span aria-current="page">Community</span></nav>
    <p className="eyebrow mb-4 text-teal">JOIN THE PQC COMMUNITY</p>
    <h1 className="section-heading max-w-3xl">Collaborate &amp; shape the post-quantum future</h1>
    <p className="mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">Preparing for the quantum era is a shared effort. The PQC community brings together cybersecurity professionals, technology experts, researchers and organisations to exchange knowledge and work together on the transition to post-quantum cryptography.</p>
    <div className="community-goals mt-12">{goals.map(goal => { const Icon = goal.icon; return <article className="community-goal" key={goal.title}><Icon className="community-goal-icon" strokeWidth={1.5} /><h2 className="text-lg">{goal.title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{goal.description}</p></article>; })}</div>
    <div className="community-cta mt-12"><p className="text-sm leading-7 text-muted-foreground">The community forum is hosted by Quantum Circle. Join the conversation, ask questions and contribute your experience.</p><Button asChild className="hero-cta mt-6"><a href={forumUrl} target="_blank" rel="noopener noreferrer">Go to the Community Forum<ArrowUpRight className="ml-3" /></a></Button></div>
    <Button asChild variant="link" className="mt-10 px-0 text-teal"><Link to={siteConfig.homeUrl}><ArrowLeft />Back to home</Link></Button>
  </div>;
}
