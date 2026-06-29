import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { VideoEmbed } from "@/components/VideoEmbed";
import { featuredProjects, partners, reel } from "@/lib/projects";

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

      <section id="selected-work" className="mx-auto max-w-[1180px] px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <p className="mb-4 text-[11px] lowercase leading-4 text-bone/54">work</p>

        <div className="grid gap-x-3 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="reel" className="mx-auto max-w-[1180px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-x-4 gap-y-3 border-t border-bone/12 pt-4 md:grid-cols-[0.32fr_1fr]">
          <div className="text-[11px] lowercase leading-4 text-bone/54">
            <p>reel</p>
            <p>{reel.version.toLowerCase()}</p>
          </div>
          <VideoEmbed title={`${reel.title} - ${reel.version}`} src={reel.embedUrl} sourceUrl={reel.url} />
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-x-4 gap-y-4 border-t border-bone/12 pt-4 md:grid-cols-[0.32fr_1fr]">
          <p className="text-[11px] lowercase leading-4 text-bone/54">clients / collaborators</p>
          <div className="grid gap-x-4 gap-y-2 text-[11px] lowercase leading-4 text-bone/64 sm:grid-cols-2 lg:grid-cols-4">
          {collaborators.map((credit) => (
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
          ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-x-4 gap-y-4 border-t border-bone/12 pt-4 md:grid-cols-[0.32fr_1fr]">
          <p className="text-[11px] lowercase leading-4 text-bone/54">booking</p>
          <a
            href="/book"
            className="max-w-3xl text-[clamp(30px,5vw,82px)] font-medium lowercase leading-[0.95] tracking-normal text-bone transition-colors hover:text-bone/72"
          >
            book your project today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
