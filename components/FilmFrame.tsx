import type { CSSProperties } from "react";
import Image from "next/image";
import type { Project } from "@/lib/projects";

type FilmFrameProps = {
  project?: Project;
  label?: string;
  priority?: boolean;
  className?: string;
};

export function FilmFrame({ project, label, priority = false, className = "" }: FilmFrameProps) {
  const image = project?.posterImage;
  const title = label ?? (project ? `${project.client} / ${project.title}` : "Media");
  const style = {
    "--tone-a": project?.palette.a ?? "#f4efe7",
    "--tone-b": project?.palette.b ?? "#77b7ff",
    "--tone-c": project?.palette.c ?? "#e64a2e",
  } as CSSProperties;

  return (
    <div
      className={`film-frame ${image ? "film-frame--image" : ""} relative overflow-hidden border border-bone/12 bg-zinc-950 ${className}`}
      style={style}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          quality={92}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ) : null}
      <div className={image ? "absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/35" : "absolute inset-0 film-frame__wash"} />
      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute left-4 top-4 z-10 flex max-w-[calc(100%-2rem)] items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-bone/72">
        <span className="size-2 bg-[var(--tone-b)]" />
        <span className="truncate">{title}</span>
      </div>
      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between gap-4">
        <p className="min-w-0 max-w-[75%] break-words font-display text-xl font-black uppercase leading-none text-bone sm:text-2xl">
          {project?.title ?? title}
        </p>
        <div className="h-8 w-12 border border-bone/18 bg-black/20" />
      </div>
    </div>
  );
}
