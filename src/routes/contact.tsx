import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { PageShell } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Alpha Power | Abu Dhabi, UAE" },
    { name: "description", content: "Contact Alpha Power Electromechanical Contracting LLC in Abu Dhabi about power, electrical, automation or solar projects." },
    { property: "og:title", content: "Contact Alpha Power" },
    { property: "og:description", content: "Start a conversation with our Abu Dhabi engineering team." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ContactPage,
});

function ContactPage() {
  return <PageShell><main><section className="page-intro"><p className="eyebrow">Start a conversation</p><h1>Your next project deserves a precise first step.</h1><p>Tell our team what you are planning. We will connect you with the right engineering specialist.</p></section><section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 md:grid-cols-[0.8fr_1.2fr]"><div className="space-y-8 border-t border-border pt-8 text-base text-muted-foreground">{[[Phone,"+971 2 679 7215 / 056 547 8556"],[Mail,"mail@alphapowergroups.com"],[MapPin,"Office 7, Mezzanine Floor, Shabia ME12, Abu Dhabi, UAE"],[Clock,"Monday–Saturday · 9:00–15:00 · 16:30–22:00"]].map(([Icon,text]) => { const DetailIcon=Icon as typeof Phone; return <div className="flex items-start gap-4" key={String(text)}><DetailIcon className="mt-0.5 size-5 text-primary" /><span className="max-w-sm leading-7">{String(text)}</span></div>; })}</div><form action="mailto:mail@alphapowergroups.com" method="post" encType="text/plain" className="grid gap-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-xl md:grid-cols-2 md:p-8"><Input name="name" required placeholder="Name" aria-label="Name" /><Input name="email" type="email" required placeholder="Email" aria-label="Email" /><Input name="phone" placeholder="Phone" aria-label="Phone" /><Input name="company" placeholder="Company" aria-label="Company" /><Textarea name="message" required placeholder="Tell us about your project" aria-label="Project details" className="min-h-40 md:col-span-2" /><Button type="submit" size="lg" className="rounded-xl md:col-span-2">Send enquiry</Button></form></section></main></PageShell>;
}
