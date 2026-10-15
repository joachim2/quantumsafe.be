import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, routeAliases } from "@/config/siteConfig";
import { Brand, PartnerLogos } from "./Brand";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const pathname = useRouterState({ select: state => state.location.pathname });
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);
  const links = siteConfig.navigation.map(item => {
    const destination = item.to in routeAliases ? routeAliases[item.to as keyof typeof routeAliases] : item.to;
    const active = pathname === destination;
    return <Link key={item.to} to={item.to} className={open ? "block border-b border-border py-4 text-sm" : "nav-link"} data-active={active} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>;
  });
  return <header className="site-header"><div className="site-container header-inner"><Brand /><nav aria-label="Main navigation" className="desktop-navigation">{links}</nav><PartnerLogos className="header-partners" /><Button ref={toggleRef} variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>{open ? <X /> : <Menu />}</Button></div>{open && <nav ref={menuRef} id="mobile-navigation" aria-label="Mobile navigation" className="site-container pb-5 md:hidden">{links}</nav>}</header>;
}