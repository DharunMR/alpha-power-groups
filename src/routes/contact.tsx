import { createFileRoute } from "@tanstack/react-router";

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
  return <PageShell><main><section className="page-intro"><p className="eyebrow">Start a conversation</p><h1>Your next project deserves a precise first step.</h1><p>Tell our team what you are planning. We will connect you with the right engineering specialist.</p></section><section className="mx-auto max-w-3xl px-6 pb-24"><form action="mailto:mail@alphapowergroups.com" method="post" encType="text/plain" className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-xl sm:gap-5 sm:p-6 md:p-8"><Input name="name" required placeholder="Name" aria-label="Name" className="min-w-0" /><Input name="email" type="email" required placeholder="Email" aria-label="Email" className="min-w-0" /><Input name="phone" placeholder="Phone" aria-label="Phone" className="min-w-0" /><Input name="company" placeholder="Company" aria-label="Company" className="min-w-0" /><Textarea name="message" required placeholder="Tell us about your project" aria-label="Project details" className="col-span-2 min-h-28 sm:min-h-40" /><Button type="submit" size="lg" className="col-span-2 rounded-xl">Send enquiry</Button></form></section></main></PageShell>;
}
