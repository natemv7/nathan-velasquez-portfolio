import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { VideoEmbed } from "@/components/VideoEmbed";
import { featuredProjects, partners, reel } from "@/lib/projects";
import { defaultDescription, defaultTitle, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: defaultTitle,
  description: defaultDescription,
  path: "/",
});

const collaborators = [
  { name: "Nike", logo: "/media/clients/nike.png", invert: true },
  { name: "NFL", logo: "/media/clients/nfl.png" },
  { name: "Interscope Records", logo: "/media/clients/interscope-records.svg", invert: true },
  { name: "Rolex", logo: "/media/clients/rolex.png" },
  { name: partners.postHouseName, logo: "/media/clients/worlds-end.png", href: partners.postHouseUrl },
  { name: "A Ma Maniere x Nike" },
  { name: "Lil Tjay" },
  { name: "Botany Scientifics" },
  { name: "Justin Haynes" },
  { name: "Omen Two" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-bone">
      <Navigation />

      <section className="mx-auto grid max-w-[1600px] gap-x-4 gap-y-8 px-4 pb-14 pt-28 sm:px-6 md:grid-cols-[0.32fr_1fr] lg:px-8">
        <div className="text-[11px] lowercase leading-4 text-bone/54">
          <p>director / editor</p>
          <p>music / brand / film</p>
        </div>

        <div className="grid max-w-6xl gap-6">
          <h1 className="max-w-5xl text-[clamp(42px,8vw,118px)] font-medium lowercase leading-[0.9] tracking-normal text-bone">
            directed with rhythm. built to cut through.
          </h1>
          <div className="grid gap-5 text-[13px] leading-5 text-bone/68 md:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)]">
            <p>
              Nathan Velasquez directs and edits music videos, commercials, fashion films, documentary pieces, and
              visual rollouts for artists and brands that need a world, not just content.
            </p>
            <p className="text-bone/48">
              Practical locations. sharp post. strong visual ideas built to feel bigger than the budget.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] lowercase leading-4 text-bone/58">
            <a href="#selected-work" className="transition-colors hover:text-bone">
              selected work
            </a>
            <a href="#reel" className="transition-colors hover:text-bone">
              reel
            </a>
            <a href="/book" className="transition-colors hover:text-bone">
              book a project
            </a>
            <a href="/about" className="transition-colors hover:text-bone">
              about
            </a>
          </div>
        </div>
      </section>

      <section id="selected-work" className="mx-auto max-w-[1600px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-4 grid gap-x-4 gap-y-2 border-t border-bone/12 pt-4 md:grid-cols-[0.32fr_1fr]">
          <p className="text-[11px] lowercase leading-4 text-bone/54">selected work</p>
          <p className="max-w-2xl text-[11px] lowercase leading-4 text-bone/46">
            films, campaigns, edits, and visual worlds selected for range, rhythm, and scale
          </p>
        </div>

        <div className="grid gap-x-3 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="reel" className="mx-auto max-w-[1600px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-x-4 gap-y-3 border-t border-bone/12 pt-4 md:grid-cols-[0.32fr_1fr]">
          <div className="text-[11px] lowercase leading-4 text-bone/54">
            <p>reel</p>
            <p>{reel.version.toLowerCase()}</p>
          </div>
          <VideoEmbed title={`${reel.title} - ${reel.version}`} src={reel.embedUrl} sourceUrl={reel.url} />
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-x-4 gap-y-4 border-t border-bone/12 pt-4 md:grid-cols-[0.32fr_1fr]">
          <p className="text-[11px] lowercase leading-4 text-bone/54">clients / collaborators</p>
          <div className="grid gap-x-4 gap-y-2 text-[11px] lowercase leading-4 text-bone/64 sm:grid-cols-2 lg:grid-cols-4">
            {collaborators.map((credit) =>
              credit.href ? (
                <a
                  key={credit.name}
                  href={credit.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-bone"
                >
                  {credit.name.toLowerCase()}
                </a>
              ) : (
                <span key={credit.name}>{credit.name.toLowerCase()}</span>
              )
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-x-4 gap-y-4 border-t border-bone/12 pt-4 md:grid-cols-[0.32fr_1fr]">
          <p className="text-[11px] lowercase leading-4 text-bone/54">booking</p>
          <div className="grid max-w-4xl gap-4">
            <a
              href="/book"
              className="text-[clamp(34px,6vw,96px)] font-medium lowercase leading-[0.9] tracking-normal text-bone transition-colors hover:text-bone/72"
            >
              build the next visual.
            </a>
            <p className="max-w-xl text-[13px] leading-5 text-bone/54">
              Send the idea, deadline, budget range, and what needs to happen. Nathan will come back with a clear path
              to make it sharp.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
