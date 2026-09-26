import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Cable, Factory, ShieldCheck, Sparkles, Target } from "lucide-react";

import { PageShell } from "@/components/site-layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Alpha Power | Electromechanical Contracting UAE" },
    { name: "description", content: "Learn about Alpha Power Electromechanical Contracting, an Abu Dhabi engineering and contracting company serving power, oil and gas, and building projects across the UAE." },
    { property: "og:title", content: "About Alpha Power" },
    { property: "og:description", content: "Over a decade of electromechanical engineering experience in the UAE." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro">
          <p className="eyebrow">About Alpha Power</p>
          <h1>Built for critical systems. Trusted for precise delivery.</h1>
          <p>Alpha Power Electromechanical Contracting LLC is a premier engineering and contracting company based in Abu Dhabi, specializing in electromechanical works for the Power and Oil &amp; Gas sectors.</p>
        </section>
        <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className="space-y-6 text-muted-foreground">
            <p className="eyebrow">Who we are</p>
            <h2 className="font-display text-4xl text-foreground md:text-5xl">Engineering confidence into every connection.</h2>
            <p>With over a decade of expertise, we have established ourselves as a trusted partner, delivering high-quality, reliable, and innovative solutions to major clients across the UAE and beyond.</p>
            <p>Our commitment to engineering excellence, safety, and sustainability drives us to provide cutting-edge power solutions, including substation works, cable installations, control systems, relay protection, automation, and renewable energy projects.</p>
            <p>Backed by a team of highly skilled professionals, we ensure every project meets the highest industry standards, adhering to strict regulatory compliance and best practices. We empower industries with efficient, cost-effective, and future-ready electromechanical solutions for a sustainable tomorrow.</p>
          </div>
          <aside className="border-l border-primary/40 pl-6 md:mt-16 md:pl-8">
            <p className="eyebrow">Our commitment</p>
            <p className="mt-4 font-display text-2xl leading-tight text-foreground">Reliable power infrastructure, carefully delivered and ready for what comes next.</p>
          </aside>
        </section>
        <section className="mx-auto grid max-w-7xl gap-px border-y border-border bg-border md:grid-cols-3">
          {[
            [Target, "Our mission", "At Alpha Power Electromechanical Contracting LLC, our mission is to deliver innovative, high-quality, and sustainable electromechanical solutions that exceed client expectations."],
            [Sparkles, "Our vision", "To be a trusted leader in the Electromechanical contracting industry by offering innovative, sustainable, and cost-effective solutions to our clients."],
            [ShieldCheck, "Our standard", "Safety, quality, regulatory compliance, and reliability guide every installation, test, and commissioning milestone."],
          ].map(([Icon, title, copy]) => {
            const FeatureIcon = Icon as typeof Target;
            return <article key={String(title)} className="bg-background p-8 md:p-10"><FeatureIcon className="size-6 text-primary" /><h2 className="mt-8 font-display text-2xl">{String(title)}</h2><p className="mt-3 text-base leading-7 text-muted-foreground">{String(copy)}</p></article>;
          })}
        </section>
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl"><p className="eyebrow">Our expertise</p><h2 className="mt-3 font-display text-4xl md:text-5xl">Qualified teams for demanding environments.</h2><p className="mt-5 max-w-2xl text-muted-foreground">We bring together highly qualified and experienced engineers who excel in the design, implementation, and management of electromechanical projects.</p></div>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
            {[
              [Cable, "Power systems", "Installation and maintenance of high-voltage substations, transmission lines, and transformers."],
              [Factory, "Oil & Gas infrastructure", "Turnkey solutions for pipeline systems, process plants, and offshore platforms."],
              [Building2, "Building electromechanical works", "HVAC systems, electrical infrastructure, plumbing, and fire protection for modern buildings."],
            ].map(([Icon, title, copy]) => {
              const ExpertiseIcon = Icon as typeof Cable;
              return <article key={String(title)} className="bg-background p-8 md:p-10"><ExpertiseIcon className="size-7 text-primary" /><h3 className="mt-8 font-display text-2xl">{String(title)}</h3><p className="mt-4 text-base leading-7 text-muted-foreground">{String(copy)}</p></article>;
            })}
          </div>
          <Button asChild className="mt-10 rounded-xl"><Link to="/services">Explore our services</Link></Button>
        </section>
      </main>
    </PageShell>
  );
}
