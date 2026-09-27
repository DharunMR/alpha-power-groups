import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

import { PageShell } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import abuDhabiEnergyVideo from "@/assets/abu-dhabi-energy-loop.mp4";
import heroImage from "@/assets/alpha-power-substation.jpg";
import infrastructureImage from "@/assets/alpha-power-infrastructure.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Alpha Power | Smart Energy & Electromechanical Solutions" },
    { name: "description", content: "Alpha Power delivers substations, cable works, automation, smart metering and renewable energy solutions across the UAE." },
    { property: "og:title", content: "Alpha Power | Smart Energy for a Sustainable Future" },
    { property: "og:description", content: "Advanced electromechanical solutions for power, oil and gas, commercial and industrial infrastructure." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const capabilities = [
  { number: "01", title: "Power & substation works", body: "Substations, switching stations, transformers and 11/22kV Ring Main Units." },
  { number: "02", title: "Cable works", body: "MV and LV cable installation, jointing, termination and testing." },
  { number: "03", title: "Panels & control systems", body: "LV panels, feeder pillars, MDB/FDB panels, RTU/PLC and DC chargers." },
  { number: "04", title: "Relay protection & safety", body: "Fault, overload and short-circuit protection schemes." },
  { number: "05", title: "Energy & smart metering", body: "AMR systems, real-time monitoring and energy management." },
  { number: "06", title: "Street lighting & infrastructure", body: "Lighting design, installation and maintenance support." },
  { number: "07", title: "Power backup solutions", body: "UPS systems, generators and battery systems." },
  { number: "08", title: "Automation & control wiring", body: "PLC integration, SCADA systems and control wiring." },
  { number: "09", title: "Solar energy solutions", body: "System design, solar installation and performance integration." },
];

function Index() {
  return (
    <PageShell>
      <main>
        <section className="relative min-h-[94svh] overflow-hidden pt-28">
          <div className="ambient ambient-one" /><div className="ambient ambient-two" />
          <div className="relative z-10 mx-auto grid min-h-[calc(94svh-7rem)] max-w-7xl items-center gap-12 px-6 pb-16 md:grid-cols-[1.05fr_0.95fr] md:pb-24">
            <div className="animate-rise">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-xs uppercase tracking-[0.18em] text-primary backdrop-blur-xl"><span className="size-1.5 rounded-full bg-primary" />Abu Dhabi · Electro mechanical & Infrastructure Engineering Contracting</div>
              <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.98] md:text-7xl">Engineering confidence into <span className="text-primary">every critical connection.</span></h1>
              <p className="mt-7 max-w-xl text-lg leading-7 text-muted-foreground">Premier electromechanical engineering and contracting solutions across the UAE — delivering high-voltage substations, cable networks, switchgear, automation, and renewable power. Trusted engineering partner for utilities, oil & gas, and industrial infrastructure — specializing in substation works, power distribution, relay protection, and turnkey commissioning.
</p>
              <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" className="rounded-xl"><Link to="/services">Explore solutions <ArrowRight /></Link></Button><Button asChild variant="outline" size="lg" className="rounded-xl bg-card/40 backdrop-blur-xl"><Link to="/about">Our approach</Link></Button></div>
              <div className="mt-12 grid max-w-xl grid-cols-2 gap-8 border-t border-border pt-6"><div><p className="font-display text-2xl text-primary">10+ years</p><p className="mt-1 text-sm text-muted-foreground">Engineering experience</p></div><div><p className="font-display text-2xl text-primary">ISO 9001:2015</p><p className="mt-1 text-sm text-muted-foreground">Quality management</p></div></div>
            </div>
            <div className="relative mx-auto w-full max-w-lg animate-rise-delayed">
              <div className="absolute -inset-5 rounded-[2rem] bg-primary/10 blur-3xl" />
              <div className="hero-motion-glow absolute -inset-5 rounded-[2rem] bg-primary/20 blur-3xl" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-border shadow-2xl">
                <video
                  src={abuDhabiEnergyVideo}
                  poster={heroImage}
                  aria-label="Abu Dhabi skyline and electrical power infrastructure"
                  className="aspect-[4/5] h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-3 max-w-64 rounded-2xl border border-border bg-card/75 p-5 shadow-2xl backdrop-blur-2xl md:-left-8"><p className="text-xs uppercase tracking-[0.16em] text-primary">Engineering confidence</p><p className="mt-2 font-display text-xl">Approved Siemens subcontractor</p><p className="mt-1 text-sm leading-5 text-muted-foreground">Supporting DMS projects across Abu Dhabi and Al Ain.</p></div>
            </div>
            <a href="#capabilities" aria-label="Scroll to capabilities" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-muted-foreground md:block"><ArrowDown className="size-5 animate-bounce" /></a>
          </div>
        </section>

        <section id="capabilities" className="border-y border-border bg-secondary/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div><p className="eyebrow">Integrated expertise</p><h2 className="font-display text-4xl md:text-5xl">What we deliver.</h2><p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">A few of our core services. We offer 9 in total.</p></div>
              <Button asChild size="lg" className="h-14 rounded-xl px-7 text-lg shadow-lg"><Link to="/services">View all 9 services <ArrowRight /></Link></Button>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.slice(0, 3).map(({ number, title, body }) => (
                <Link key={number} to="/services" hash={`service-${number}`} className="group flex flex-col rounded-2xl border border-border bg-card/45 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/60 hover:bg-card/70">
                  <div className="flex items-center justify-between"><span className="font-display text-3xl text-primary">{number}</span><span className="grid size-10 place-items-center rounded-full border border-border text-primary transition group-hover:bg-primary group-hover:text-primary-foreground"><ArrowUpRight className="size-5" /></span></div>
                  <h3 className="mt-6 font-display text-2xl">{title}</h3>
                  <p className="mt-3 flex-1 text-lg leading-8 text-muted-foreground">{body}</p>
                  <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-base font-medium text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">View details <ArrowRight className="size-4" /></span>
                </Link>
              ))}
            </div>
            <p className="mt-8 text-center text-base text-muted-foreground">+ 6 more services — <Link to="/services" className="font-medium text-primary underline underline-offset-4 hover:no-underline">see details</Link></p>
          </div>
        </section>

        <section className="relative min-h-[650px] overflow-hidden">
          <img src={infrastructureImage} width={1600} height={912} loading="lazy" alt="Electrical transmission and substation infrastructure at dusk" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/15" />
          <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-24"><div className="max-w-2xl"><p className="eyebrow">Built for demanding environments</p><h2 className="font-display text-4xl leading-tight md:text-6xl">One engineering partner. Every critical connection.</h2><p className="mt-6 max-w-xl leading-7 text-muted-foreground">From 33/11kV substations and transmission systems to energy monitoring and solar installations, Alpha Power delivers safe, tested and commissioned solutions.</p><div className="mt-9 grid gap-5 sm:grid-cols-3">{["Power","Oil & Gas","Industrial"].map((sector) => <div key={sector} className="rounded-xl border border-border bg-card/55 px-5 py-4 text-base backdrop-blur-xl"><span className="text-primary">◆</span><p className="mt-2 font-display">{sector}</p></div>)}</div></div></div>
        </section>

        <section className="bg-primary text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-end"><div><p className="text-sm uppercase tracking-[0.18em] opacity-70">Ready to move forward?</p><h2 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl">Bring clarity, control and resilience to your next project.</h2></div><Button asChild variant="secondary" size="lg" className="rounded-xl"><Link to="/contact">Talk to our team <ArrowRight /></Link></Button></div></section>
      </main>
    </PageShell>
  );
}
