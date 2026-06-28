import type { Project } from "@/lib/projects";
import { FilmFrame } from "@/components/FilmFrame";
import { VideoEmbed } from "@/components/VideoEmbed";

type FeaturedProjectProps = {
  project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <section id={`project-${project.slug}`} className="grid min-w-0 scroll-mt-24 gap-5 border-t border-bone/16 py-10 lg:py-14">
      <div className="grid min-w-0 gap-4 lg:grid-cols-[1fr_0.42fr] lg:items-end">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase text-bone/42">{project.year !== "TBD" ? project.year : project.type}</p>
          <h3 className="mt-3 break-words font-display text-5xl font-black uppercase leading-none text-bone sm:text-7xl lg:text-8xl">
            {project.client}
            <span className="text-bone/24"> / </span>
            {project.title}
          </h3>
        </div>
        <p className="break-words text-sm font-semibold uppercase leading-6 text-bone/62 lg:text-right">{project.role}</p>
      </div>

      {project.videoEmbedUrl && project.finalVideoUrl ? (
        <VideoEmbed title={`${project.client}: ${project.title}`} src={project.videoEmbedUrl} sourceUrl={project.finalVideoUrl} theme="dark" />
      ) : (
        <FilmFrame project={project} label="Featured case study" className="min-h-[420px]" />
      )}

      {project.additionalVideos?.length ? (
        <div className="grid min-w-0 gap-4 md:grid-cols-3 lg:col-span-2">
          {project.additionalVideos.map((video) => (
            <VideoEmbed key={video.embedUrl} title={video.title} src={video.embedUrl} sourceUrl={video.url} theme="dark" />
          ))}
        </div>
      ) : null}

      <details className="group border-t border-bone/12 pt-4">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold uppercase text-bone/58 transition-colors hover:text-bone">
          Credits
          <span className="text-xl leading-none text-bone/34 transition-transform group-open:rotate-45">+</span>
        </summary>
        <div className="mt-5 grid min-w-0 gap-2 sm:grid-cols-[0.28fr_1fr]">
          <p className="text-xs font-semibold uppercase text-bone/38">Info</p>
          <div className="grid min-w-0 gap-2 text-sm leading-6 text-bone/66">
            <p>
              <span className="text-bone">Project:</span> {project.type}
            </p>
            {project.year !== "TBD" ? (
              <p>
                <span className="text-bone">Year:</span> {project.year}
              </p>
            ) : null}
            <p>
              <span className="text-bone">Role:</span> {project.role}
            </p>
          </div>
          <p className="mt-4 text-xs font-semibold uppercase text-bone/38 sm:mt-0">Credits</p>
          <div className="grid min-w-0 gap-2">
            {project.credits.map((credit) => (
              <p key={`${credit.label}-${credit.value}`} className="min-w-0 break-words text-sm leading-6 text-bone/66">
                <span className="text-bone">{credit.label}:</span> {credit.value}
              </p>
            ))}
          </div>
        </div>
      </details>
    </section>
  );
}
