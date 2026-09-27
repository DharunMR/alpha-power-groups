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
        <section className="mx-auto max-w-7xl px-5 pb-12 md:px-6 md:pb-24">
          <div className="rounded-3xl border border-primary/20 bg-card p-5 shadow-xl md:p-14">
            <p className="eyebrow">Who we are</p>
            <h2 className="font-display text-2xl leading-tight text-foreground md:text-6xl">Engineering confidence into every connection.</h2>
            <p className="mt-4 max-w-4xl border-l-4 border-primary pl-4 font-display text-base md:mt-8 md:pl-6 md:text-2xl leading-snug text-foreground md:text-3xl">
              With <span className="text-primary">over a decade of expertise</span>, we are a trusted partner delivering high-quality, reliable, and innovative solutions to major clients across the UAE and beyond.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 md:mt-12 md:gap-6">
              <div className="rounded-2xl bg-secondary/50 p-3 md:p-8">
                <ShieldCheck className="size-5 text-primary md:size-7" />
                <h3 className="mt-2 font-display text-sm md:mt-4 md:text-xl font-semibold text-foreground">Excellence, safety &amp; sustainability</h3>
                <p className="mt-2 text-xs leading-5 text-foreground/80 md:mt-3 md:text-lg md:leading-8">Our commitment drives us to provide cutting-edge power solutions, including <strong className="text-foreground">substation works, cable installations, control systems, relay protection, automation, and renewable energy projects</strong>.</p>
              </div>
              <div className="rounded-2xl bg-secondary/50 p-3 md:p-8">
                <Building2 className="size-5 text-primary md:size-7" />
                <h3 className="mt-2 font-display text-sm md:mt-4 md:text-xl font-semibold text-foreground">Skilled professionals, highest standards</h3>
                <p className="mt-2 text-xs leading-5 text-foreground/80 md:mt-3 md:text-lg md:leading-8">Every project meets the highest industry standards with <strong className="text-foreground">strict regulatory compliance and best practices</strong> — efficient, cost-effective, future-ready solutions for a sustainable tomorrow.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl grid-cols-3 gap-px border-y border-border bg-border">
          {[
            [Target, "Our mission", "At Alpha Power Electromechanical Contracting LLC, our mission is to deliver innovative, high-quality, and sustainable electromechanical solutions that exceed client expectations."],
            [Sparkles, "Our vision", "To be a trusted leader in the Electromechanical contracting industry by offering innovative, sustainable, and cost-effective solutions to our clients."],
            [ShieldCheck, "Our standard", "Safety, quality, regulatory compliance, and reliability guide every installation, test, and commissioning milestone."],
          ].map(([Icon, title, copy]) => {
            const FeatureIcon = Icon as typeof Target;
            return <article key={String(title)} className="bg-background p-3 md:p-10"><FeatureIcon className="size-5 text-primary md:size-6" /><h2 className="mt-3 font-display text-sm md:mt-8 md:text-2xl">{String(title)}</h2><p className="mt-1 text-xs leading-5 text-muted-foreground md:mt-3 md:text-base md:leading-7">{String(copy)}</p></article>;
          })}
        </section>
        <section className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-24">
          <div className="max-w-3xl"><p className="eyebrow">Our expertise</p><h2 className="mt-2 font-display text-2xl md:text-5xl">Qualified teams for demanding environments.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:mt-5 md:text-lg">We bring together highly qualified and experienced engineers who excel in the design, implementation, and management of electromechanical projects.</p></div>
          <div className="mt-6 grid grid-cols-3 gap-px border border-border bg-border md:mt-12">
            {[
              [Cable, "Power systems", "Installation and maintenance of high-voltage substations, transmission lines, and transformers."],
              [Factory, "Oil & Gas infrastructure", "Turnkey solutions for pipeline systems, process plants, and offshore platforms."],
              [Building2, "Building electromechanical works", "HVAC systems, electrical infrastructure, plumbing, and fire protection for modern buildings."],
            ].map(([Icon, title, copy]) => {
              const ExpertiseIcon = Icon as typeof Cable;
              return <article key={String(title)} className="bg-background p-3 md:p-10"><ExpertiseIcon className="size-5 text-primary md:size-7" /><h3 className="mt-3 font-display text-sm md:mt-8 md:text-2xl">{String(title)}</h3><p className="mt-1 text-xs leading-5 text-muted-foreground md:mt-4 md:text-base md:leading-7">{String(copy)}</p></article>;
            })}
          </div>
          <Button asChild className="mt-10 rounded-xl"><Link to="/services">Explore our services</Link></Button>
        </section>
        <section className="border-y border-border bg-secondary/30 py-12 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <p className="eyebrow">Key achievements</p>
            <h2 className="mt-2 font-display text-2xl md:text-5xl">Trusted on major UAE projects.</h2>
            <ul className="mt-5 grid grid-cols-3 gap-2 text-xs leading-5 text-muted-foreground md:mt-8 md:gap-4 md:text-lg md:leading-8">
              <li className="rounded-2xl border border-border bg-card/50 p-3 md:p-6">Approved sub-contractor for Siemens for their DMS projects across Abu Dhabi and Al Ain.</li>
              <li className="rounded-2xl border border-border bg-card/50 p-3 md:p-6">Successfully completed projects for leading government entities and private corporations.</li>
              <li className="rounded-2xl border border-border bg-card/50 p-3 md:p-6">Recognized for on-time delivery and adherence to international quality standards.</li>
            </ul>
            <h3 className="mt-8 font-display text-lg md:mt-16 md:text-2xl">Completed projects</h3>
            <div className="mt-4 grid grid-cols-2 gap-2 md:mt-6 md:gap-4">
              {[
                ["DMS adaptation & RTU installation, testing and commissioning", "Siemens · Abu Dhabi & Al Ain substations"],
                ["22kV switchgear, transformers & 48V DC systems", "TCAJV · New Abu Dhabi International Airport (MTB)"],
                ["Testing & commissioning of 22kV substations and cable works", "Thermo · Masdar Institute, Abu Dhabi"],
                ["Jointing, termination and testing of 22kV cables", "Drake & Scull · Ruwais Housing Complex (ADNOC)"],
                ["Complete installation of 33/11kV primary substation", "Al Jaber · Shahama & Madinat Zayed"],
                ["Street lighting poles, lights and cabling works", "Tyco · Sweihan Solar Project"],
              ].map(([work, client]) => (
                <div key={work} className="rounded-xl border-l-2 border-primary bg-card/50 px-3 py-2 md:px-5 md:py-4"><p className="text-xs leading-5 text-foreground md:text-lg md:leading-8">{work}</p><p className="mt-1 text-[11px] leading-4 text-muted-foreground md:text-base">{client}</p></div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground md:mt-6 md:text-base">Other clients include Lindenberg, Danway, Pivot, NPC, CCC, Arabtec, Multiplex and more — over 75 completed projects across the UAE.</p>
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-12 md:gap-10 md:px-6 md:py-24">
          <div><p className="eyebrow">Quality policy</p><h2 className="mt-2 font-display text-base md:mt-3 md:text-3xl">ISO 9001:2015 certified quality.</h2><p className="mt-2 text-xs leading-5 text-muted-foreground md:mt-4 md:text-lg md:leading-8">We integrate sound quality management into every activity, built on customer value, process focus, continual improvement (Plan-Do-Check-Act), leadership, motivation and long-term partnership.</p></div>
          <div><p className="eyebrow">Health, safety &amp; environment</p><h2 className="mt-2 font-display text-base md:mt-3 md:text-3xl">All accidents are preventable.</h2><p className="mt-2 text-xs leading-5 text-muted-foreground md:mt-4 md:text-lg md:leading-8">No task is so important that injury to people or damage to the environment is justified. We comply with all applicable HSE legislation, control hazards, train our people and work only with contractors who share our standards.</p></div>
        </section>
      </main>
    </PageShell>
  );
}
