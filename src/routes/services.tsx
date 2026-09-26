import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUp, Check, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { PageShell } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import automationImage from "@/assets/service-automation.jpg";
import cablesImage from "@/assets/service-cables.jpg";
import solarImage from "@/assets/service-solar.jpg";
import switchgearImage from "@/assets/service-switchgear.jpg";

const services = [
  { number: "01", title: "Power & substation works", copy: "Complete power-distribution infrastructure built for safe, dependable operation across utility, industrial and commercial environments.", details: ["Transformers and switchgear", "Protection systems", "Testing and commissioning"], image: switchgearImage, alt: "Modern electrical switchgear installation" },
  { number: "02", title: "Cable works", copy: "End-to-end high- and low-voltage cable works delivered with careful routing, termination and verification.", details: ["HV and LV installation", "Jointing and termination", "Cable testing"], image: cablesImage, alt: "Engineers installing high-voltage power cables" },
  { number: "03", title: "Panels & control systems", copy: "Purpose-built electrical panels and motor control centres that bring critical systems into one coordinated environment.", details: ["Distribution panels", "Motor control centres", "Integrated monitoring"], image: automationImage, alt: "Advanced electrical automation control room" },
  { number: "04", title: "Relay protection & safety", copy: "Protection schemes engineered to identify faults quickly and isolate affected equipment before disruption spreads.", details: ["Fault protection", "Overload protection", "Short-circuit protection"], image: switchgearImage, alt: "Protected electrical switchgear room" },
  { number: "05", title: "Energy & smart metering", copy: "Connected metering and monitoring solutions that make energy consumption visible, measurable and easier to control.", details: ["AMR systems", "Real-time monitoring", "Energy management"], image: automationImage, alt: "Energy monitoring and smart control systems" },
  { number: "06", title: "Street lighting & infrastructure", copy: "Efficient outdoor lighting systems planned and installed for reliable performance across streets and public spaces.", details: ["Lighting design", "Installation", "Maintenance support"], image: solarImage, alt: "Modern infrastructure and renewable energy installation" },
  { number: "07", title: "Power backup solutions", copy: "Resilient backup systems that protect essential operations against outages, fluctuations and interruptions.", details: ["UPS systems", "Generators", "Battery systems"], image: switchgearImage, alt: "Electrical equipment supporting continuous power" },
  { number: "08", title: "Automation & control wiring", copy: "Integrated controls that connect field equipment, monitoring platforms and operating teams with precision.", details: ["PLC integration", "SCADA systems", "Control wiring"], image: automationImage, alt: "SCADA automation control room" },
  { number: "09", title: "Solar energy solutions", copy: "Scalable solar installations designed to improve energy performance for residential, commercial and industrial sites.", details: ["System design", "Solar installation", "Performance integration"], image: solarImage, alt: "Solar energy installation in Abu Dhabi" },
];

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Power & Electrical Services | Alpha Power UAE" },
    { name: "description", content: "Explore Alpha Power services: substations, cables, control systems, smart metering, backup power, automation and solar energy." },
    { property: "og:title", content: "Alpha Power Services" },
    { property: "og:description", content: "End-to-end power, electrical, automation and renewable energy solutions." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ServicesPage,
});

function ServicesPage() {
  const [active, setActive] = useState("01");
  const scrollLockRef = useRef(false);
  const unlockTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const articles = Array.from(document.querySelectorAll<HTMLElement>("[data-service-number]"));
    if (articles.length === 0) return;

    const updateActive = () => {
      if (scrollLockRef.current) return;

      const marker = window.scrollY + Math.min(260, window.innerHeight * 0.26);
      const firstArticle = articles[0];
      if (!firstArticle) return;
      let current = firstArticle;
      for (const article of articles) {
        if (article.offsetTop <= marker) current = article;
      }

      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24;
      if (nearBottom) current = articles[articles.length - 1] ?? current;

      const number = current.getAttribute("data-service-number");
      if (number) setActive(number);
    };

    let frame = 0;
    const handleScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (unlockTimerRef.current !== null) window.clearTimeout(unlockTimerRef.current);
    };
  }, []);

  return (
    <PageShell>
      <main>
        <section className="page-intro pb-10">
          <p className="eyebrow">Nine integrated capabilities</p>
          <h1>From incoming power to intelligent control.</h1>
          <p>Our teams handle supply, installation, testing and commissioning across the complete electrical infrastructure lifecycle.</p>
        </section>

        <section aria-label="What we deliver" className="mx-auto grid max-w-7xl gap-3 px-6 pb-14 sm:grid-cols-3">
          {[
            { title: "Supply to commissioning", copy: "One accountable team across the full delivery lifecycle." },
            { title: "HV, LV & controls", copy: "Substations, cable networks, panels and automation under one roof." },
            { title: "Abu Dhabi based", copy: "Local teams supporting sites across the UAE." },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-border/70 bg-secondary/40 p-6">
              <p className="font-display text-base font-semibold text-foreground">{item.title}</p>
              <p className="mt-2 text-base leading-7 text-muted-foreground">{item.copy}</p>
            </div>
          ))}
        </section>

        <nav aria-label="Service index" className="sticky top-20 z-30 mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <div className="grid gap-1 rounded-3xl border border-border/70 bg-background/80 p-2 shadow-xl backdrop-blur-2xl sm:grid-cols-3 lg:grid-cols-9">
            {services.map((service) => (
              <a
                key={service.number}
                href={`#service-${service.number}`}
                aria-current={active === service.number ? "true" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  const target = document.getElementById(`service-${service.number}`);
                  if (!target) return;

                  setActive(service.number);
                  scrollLockRef.current = true;
                  if (unlockTimerRef.current !== null) window.clearTimeout(unlockTimerRef.current);
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.replaceState(null, "", `#service-${service.number}`);
                  unlockTimerRef.current = window.setTimeout(() => {
                    scrollLockRef.current = false;
                    setActive(service.number);
                  }, 1400);
                }}
                className={`grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-2xl px-3 py-3 text-sm transition-colors sm:grid-cols-1 lg:items-start ${active === service.number ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"}`}
              >
                <span className={`shrink-0 font-medium ${active === service.number ? "text-primary-foreground" : "text-primary"}`}>{service.number}</span>
                <span className="truncate lg:whitespace-normal">{service.title}</span>
              </a>
            ))}
          </div>
        </nav>

        <section className="border-t border-border px-6 py-12 sm:py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-16 sm:gap-24 lg:gap-32">
          {services.map((service, index) => {
            const imageFirst = index % 2 === 0;
            return (
              <article id={`service-${service.number}`} key={service.number} data-service-number={service.number} className="scroll-mt-44">
                  <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  <div className={`relative ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
                    <div
                      aria-hidden
                      className={`absolute -inset-3 rounded-[2.5rem] border border-primary/15 sm:-inset-5 ${imageFirst ? "translate-x-4 translate-y-4" : "-translate-x-4 translate-y-4"}`}
                    />
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-border">
                      <img src={service.image} width={1408} height={960} loading="lazy" alt={service.alt} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]" />
                      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                      <span className="absolute bottom-4 left-4 inline-flex items-center rounded-full border border-primary-foreground/25 bg-background/70 px-3 py-1 font-display text-sm font-semibold text-primary-foreground backdrop-blur-md">
                        {service.number}
                      </span>
                    </div>
                  </div>
                  <div className={`flex items-center px-1 sm:px-4 lg:px-0 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="max-w-lg">
                      <span className="font-display text-6xl font-semibold text-accent/70 sm:text-7xl">{service.number}</span>
                      <h2 className="mt-6 font-display text-3xl font-semibold leading-tight sm:text-4xl">{service.title}</h2>
                      <p className="mt-5 text-lg leading-7 text-muted-foreground">{service.copy}</p>
                      <ul className="mt-8 flex flex-wrap gap-2">
                        {service.details.map((detail) => (
                          <li key={detail} className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-base text-foreground">
                            <Check className="size-3.5 shrink-0 text-primary" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact" className="mt-9 inline-flex items-center gap-2 border-b border-primary pb-1 text-base font-medium text-primary transition-colors hover:text-foreground">
                        Discuss this service <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 rounded-[2.5rem] border border-border/70 bg-secondary/40 p-10 md:flex-row md:items-end md:p-16">
            <div>
              <p className="eyebrow">Need a delivery partner?</p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">Bring us the next complex system.</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">Tell us about your site, scope and timeline — we will come back with a clear plan and a dependable team.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-xl"><Link to="/contact">Discuss your project</Link></Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl">
                <a href="tel:+97126797215"><Phone className="size-4" />+971 2 679 7215</a>
              </Button>
            </div>
          </div>
        </section>

        <div className="pointer-events-none fixed bottom-6 right-6 z-40">
          <a
            href="#services-top"
            aria-label="Back to top"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="pointer-events-auto grid size-11 place-items-center rounded-full border border-border/70 bg-background/80 text-muted-foreground shadow-xl backdrop-blur-2xl transition-colors hover:text-primary"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </main>
    </PageShell>
  );
}
