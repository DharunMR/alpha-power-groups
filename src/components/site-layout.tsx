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
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-border/70 bg-background/70 px-4 py-3 shadow-2xl backdrop-blur-2xl md:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Alpha Power home">
          <BrandMark />
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold text-foreground">Alpha Power</span>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Electromechanical Contracting</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-base text-muted-foreground md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to} activeProps={{ className: "text-primary" }} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="rounded-xl px-4 text-sm sm:px-5 sm:text-base">
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
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3"><BrandMark /><span className="font-display font-semibold">Alpha Power</span></div>
          <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">Power and electrical solutions for critical infrastructure across the UAE.</p>
        </div>
        <div className="space-y-3 text-base text-muted-foreground">
          <p className="font-display font-medium text-foreground">Connect</p>
          <a href="tel:+97126797215" className="flex items-center gap-2 hover:text-primary"><Phone className="size-4" />+971 2 679 7215</a>
          <a href="mailto:mail@alphapowergroups.com" className="flex items-center gap-2 hover:text-primary"><Mail className="size-4" />mail@alphapowergroups.com</a>
        </div>
        <div className="space-y-3 text-base text-muted-foreground">
          <p className="font-display font-medium text-foreground">Abu Dhabi office</p>
          <p className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 shrink-0" />Building C9, Mezzanine Floor, Office 7, Shabiya 12, Abu Dhabi, UAE</p>
        </div>
      </div>
      <div className="border-t border-border px-6 py-5 text-center text-sm text-muted-foreground">© 2026 Alpha Power Electromechanical Contracting LLC</div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground"><SiteHeader />{children}<SiteFooter /></div>;
}
