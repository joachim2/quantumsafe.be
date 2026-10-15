import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/config/siteConfig";

export function Brand() {
  return <Link to={siteConfig.homeUrl} aria-label={`${siteConfig.title} home`} className="inline-block shrink-0"><div className="brand-name">PQC<span className="text-teal">.</span></div><div className="brand-subtitle">POST-QUANTUM CRYPTOGRAPHY</div></Link>;
}
export function PartnerLogos({ className = "" }: { className?: string }) {
  return <div className={`partner-logos ${className}`}>{siteConfig.partners.map(partner => <a key={partner.name} href={partner.websiteUrl} target="_blank" rel="noopener noreferrer" aria-label={`${partner.name} official website (opens in a new tab)`}><img src={partner.logoUrl} alt={partner.name} className={partner.className} loading="lazy" /></a>)}</div>;
}