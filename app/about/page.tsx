import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { profileMedia } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "About Nathan Velasquez, a director and editor from Springfield, Massachusetts working across music videos, commercials, fashion visuals, documentary pieces, and VFX driven projects.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ink text-bone">
      <Navigation />

      <section className="mx-auto grid max-w-[1600px] gap-x-4 gap-y-6 px-4 pb-16 pt-28 sm:px-6 md:grid-cols-[0.32fr_0.52fr_1fr] lg:px-8">
        <div className="text-[11px] lowercase leading-4 text-bone/54">
          <p>about</p>
          <Link href="/#selected-work" className="transition-colors hover:text-bone">
            back to work
          </Link>
        </div>

        <div className="relative aspect-[4/5] min-h-0 overflow-hidden bg-bone/[0.03]">
          <Image
            src={profileMedia.portrait}
            alt="Nathan Velasquez seated with camera equipment."
            fill
            sizes="(min-width: 768px) 32vw, 100vw"
            className="object-cover object-[50%_20%]"
          />
        </div>

        <div className="grid max-w-3xl content-start gap-5 text-[13px] leading-5 text-bone/68">
          <p>
            Nathan Velasquez is a director and editor from Springfield, Massachusetts, with over 10 years of editing
            experience. His work moves through music videos, commercials, spec ads, fashion visuals, documentary pieces,
            and VFX driven projects.
          </p>
          <p>
            Coming from an editing background first, Nathan approaches directing with rhythm, pacing, and structure
            already in mind. Every shot is built to cut. Every scene is designed around feeling, movement, and a clear
            visual world.
          </p>
          <p>
            His work has reached brands and culture spaces across music, sports, and fashion, with credits connected to
            Nike spec work, Rolex, NFL, independent fashion campaigns, Interscope Records, Motown Records, and major
            artists and labels.
          </p>
          <p>
            Nathan&apos;s style focuses on making practical locations feel cinematic, using limited resources with
            intention, sharp post production, and strong visual storytelling.
          </p>

          <div className="mt-3 grid gap-5 border-t border-bone/12 pt-5">
            <p>
              I also create through my own brand, OASIS, building clothing and visuals around the same message: make
              something real, sharp, and impossible to ignore.
            </p>
            <div className="relative aspect-[4/5] overflow-hidden bg-bone/[0.03] sm:aspect-[5/4]">
              <Image
                src="/media/about/oasis-collage.png"
                alt="OASIS clothing and production collage."
                fill
                sizes="(min-width: 768px) 54vw, 100vw"
                className="object-cover"
              />
            </div>
            <p>
              For OASIS, the clothes are not just merch. They are an extension of the world I am building as a director
              and editor. The pieces represent the same ideas in my films and visuals: pressure, ambition, isolation,
              movement, and turning limited resources into something that feels bigger than where it came from.
            </p>
            <p>
              That same mindset carries into the work I make for other creators. Whether it is a music video, campaign,
              edit, reel, or visual rollout, I focus on creating moments that can move online. Not just clean content,
              but work with a hook, a feeling, a visual identity, and a reason for people to replay it.
            </p>
            <p>
              My goal is to help artists, brands, and creators look bigger than their budget, build a world around what
              they do, and create visuals that people actually remember.
            </p>
          </div>

          <p className="text-bone/50">directing / editing / commercials / music videos / fashion / vfx</p>
          <Link href="/book" className="text-[11px] lowercase leading-4 text-bone/72 transition-colors hover:text-bone">
            book your project today
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
