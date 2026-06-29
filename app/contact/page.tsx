import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { contact, partners, profileMedia } from "@/lib/projects";

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

      <section className="mx-auto grid max-w-[1600px] gap-x-4 gap-y-6 px-4 pb-16 pt-28 sm:px-6 md:grid-cols-[0.32fr_0.42fr_1fr] lg:px-8">
        <div className="text-[11px] lowercase leading-4 text-bone/54">
          <p>contact</p>
          <Link href="/#selected-work" className="transition-colors hover:text-bone">
            back to work
          </Link>
        </div>

        <div className="relative aspect-[4/5] min-h-0 overflow-hidden bg-bone/[0.03]">
          <Image
            src={profileMedia.portrait}
            alt="Nathan Velasquez seated with camera equipment."
            fill
            sizes="(min-width: 768px) 28vw, 100vw"
            className="object-cover object-[50%_14%]"
          />
        </div>

        <div className="grid max-w-3xl content-start gap-8">
          <div className="grid gap-3 text-[13px] leading-5 text-bone/68">
            <p>for videos, edits, campaigns, reels, visual rollouts, and post work.</p>
            <p className="text-bone/46">send the basics and nathan will follow up with availability and next steps.</p>
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
