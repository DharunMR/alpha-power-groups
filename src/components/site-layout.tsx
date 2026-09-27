import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Menu, Phone } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
] as const;

export function BrandMark() {
  return (
    <span className="grid size-10 shrink-0 place-items-center">
      <img src="/favicon.png" alt="Alpha Power logo" className="size-10 object-contain" />
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 md:px-6 md:py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl border border-border/70 bg-background/80 px-3 py-2.5 md:px-4 md:py-3 shadow-2xl backdrop-blur-2xl md:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2.5 md:gap-3" aria-label="Alpha Power home">
          <BrandMark />
          <span className="min-w-0 leading-tight">
            <span className="block font-display text-base font-semibold text-foreground">Alpha Power</span>
            <span className="hidden text-[11px] uppercase sm:block tracking-[0.2em] text-muted-foreground">Electromechanical Contracting</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-base text-muted-foreground md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to} activeProps={{ className: "text-primary" }} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Button asChild className="hidden rounded-xl px-5 text-base sm:inline-flex">
            <a href="/Alpha-Power-Company-Profile.pdf" target="_blank" rel="noreferrer">
              Company Profile
            </a>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Open navigation">
            <Menu />
          </Button>
        </div>
      </div>
      {open && (
        <nav className="mx-auto mt-2 grid max-w-7xl gap-1 rounded-2xl border border-border bg-background/95 p-3 shadow-2xl backdrop-blur-2xl md:hidden" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-base text-muted-foreground hover:bg-secondary hover:text-foreground">
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2 h-12 rounded-xl text-base">
            <a href="/Alpha-Power-Company-Profile.pdf" target="_blank" rel="noreferrer">Company Profile</a>
          </Button>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-8 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10 md:px-6 md:py-12">
        <div>
          <div className="flex items-center gap-3"><BrandMark /><span className="font-display font-semibold">Alpha Power</span></div>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground md:mt-4 md:text-base md:leading-7">Power and electrical solutions for critical infrastructure across the UAE.</p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:contents">
          <a href="tel:+97126797215" className="flex items-center justify-center gap-2 rounded-xl border border-border px-3 py-2.5 text-sm text-foreground md:hidden"><Phone className="size-4 text-primary" />Call us</a>
          <a href="mailto:mail@alphapowergroups.com" className="flex items-center justify-center gap-2 rounded-xl border border-border px-3 py-2.5 text-sm text-foreground md:hidden"><Mail className="size-4 text-primary" />Email us</a>
          <div className="hidden space-y-3 text-base text-muted-foreground md:block">
            <p className="font-display font-medium text-foreground">Connect</p>
            <a href="tel:+97126797215" className="flex items-center gap-2 hover:text-primary"><Phone className="size-4" />+971 2 679 7215</a>
            <a href="mailto:mail@alphapowergroups.com" className="flex items-center gap-2 hover:text-primary"><Mail className="size-4" />mail@alphapowergroups.com</a>
          </div>
        </div>
        <div className="text-sm text-muted-foreground md:space-y-3 md:text-base">
          <p className="hidden font-display font-medium text-foreground md:block">Abu Dhabi office</p>
          <p className="flex items-start gap-2 text-sm leading-6 md:text-base"><MapPin className="mt-1 size-4 shrink-0" />Office 7, Mezzanine Floor, Shabia ME12, Abu Dhabi, UAE</p>
        </div>
      </div>
      <div className="border-t border-border px-5 py-4 text-center text-xs text-muted-foreground md:py-5 md:text-sm">© 2026 Alpha Power Electromechanical Contracting LLC</div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground"><SiteHeader />{children}<SiteFooter /></div>;
}
