import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { contact, partners } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Nathan Velasquez for directing, editing, music videos, commercials, fashion films, reels, visual rollouts, and post work.",
  path: "/contact",
});

const contactLinks = [
  { label: "book a project", href: "/book" },
  { label: "email", href: `mailto:${contact.email}` },
  { label: "instagram", href: contact.instagram, external: true },
  { label: "linkedin", href: contact.linkedin, external: true },
  { label: partners.postHouseName.toLowerCase(), href: partners.postHouseUrl, external: true },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ink text-bone">
      <Navigation />

      <section className="mx-auto grid max-w-[1600px] gap-x-4 gap-y-8 px-4 pb-16 pt-28 sm:px-6 md:grid-cols-[0.32fr_1fr] lg:px-8">
        <div className="text-[11px] lowercase leading-4 text-bone/54">
          <p>contact</p>
          <Link href="/#selected-work" className="transition-colors hover:text-bone">
            back to work
          </Link>
        </div>

        <div className="grid max-w-6xl content-start gap-10">
          <h1 className="max-w-5xl text-[clamp(42px,8vw,118px)] font-medium lowercase leading-[0.9] tracking-normal text-bone">
            bring the idea. make it hit.
          </h1>

          <div className="grid gap-5 text-[13px] leading-5 text-bone/68 md:grid-cols-2">
            <p>
              For music videos, commercials, edits, reels, campaign films, fashion work, and post-heavy rollouts.
            </p>
            <p className="text-bone/48">
              Send the idea, the timeline, and the pressure points. Nathan will follow up with availability and the
              cleanest way to make it real.
            </p>
          </div>

          <div className="grid gap-y-3 text-[clamp(30px,5vw,82px)] font-medium lowercase leading-[0.95] text-bone">
            {contactLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="transition-colors hover:text-bone/72"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
