import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "About Nathan Velasquez, a director and editor making cinematic music videos, commercials, fashion films, documentary pieces, and visual worlds through OASIS.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ink text-bone">
      <Navigation />

      <section className="mx-auto grid max-w-[1600px] gap-x-4 gap-y-8 px-4 pb-16 pt-28 sm:px-6 md:grid-cols-[0.32fr_1fr] lg:px-8">
        <div className="text-[11px] lowercase leading-4 text-bone/54">
          <p>about</p>
          <Link href="/#selected-work" className="transition-colors hover:text-bone">
            back to work
          </Link>
        </div>

        <div className="grid gap-8">
          <h1 className="max-w-5xl text-[clamp(42px,8vw,118px)] font-medium lowercase leading-[0.9] tracking-normal text-bone">
            the edit is the foundation.
          </h1>

          <div className="relative aspect-[1.02/1] overflow-hidden bg-bone/[0.03]">
            <Image
              src="/media/about/oasis-collage.png"
              alt="OASIS clothing, production, and visual world collage."
              fill
              priority
              sizes="(min-width: 768px) 68vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="grid gap-x-4 gap-y-8 border-t border-bone/12 pt-4 md:grid-cols-[0.5fr_1fr]">
            <p className="text-[11px] lowercase leading-4 text-bone/54">bio / oasis</p>

            <div className="grid max-w-3xl content-start gap-5 text-[13px] leading-5 text-bone/68">
              <p>
                Nathan Velasquez is a director and editor from Springfield, Massachusetts, with over 10 years of editing
                experience across music videos, commercials, fashion films, documentary pieces, and VFX-driven work.
              </p>
              <p>
                He came up through the edit first. That shapes the way he directs: every setup needs rhythm, every shot
                needs a reason, and every scene has to move.
              </p>
              <p>
                His work moves through brands, labels, artists, and culture spaces across music, sports, and fashion,
                with credits connected to Nike, Rolex, NFL, Interscope Records, Motown Records, World&apos;s End, and
                major artists and labels.
              </p>
              <p>
                OASIS is the world he builds for himself: clothing and visuals shaped by pressure, ambition, isolation,
                movement, and the instinct to make limited resources feel larger than they are.
              </p>
              <p>
                The same standard carries into client work. Not just clean footage. A hook. A feeling. A visual identity
                that makes the artist, brand, or idea feel impossible to ignore.
              </p>

              <div className="grid gap-2 border-t border-bone/12 pt-5 text-[11px] lowercase leading-4 text-bone/54 sm:grid-cols-2">
                <p>directing / cinematography / editing</p>
                <p>music videos / commercials / fashion / documentary / vfx</p>
              </div>

              <Link
                href="/book"
                className="text-[11px] lowercase leading-4 text-bone/72 transition-colors hover:text-bone"
              >
                start a project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
