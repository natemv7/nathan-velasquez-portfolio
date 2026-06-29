"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { FilmFrame } from "@/components/FilmFrame";
import { LoopingPreviewVideo } from "@/components/LoopingPreviewVideo";
import { VideoEmbed } from "@/components/VideoEmbed";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const title = `${project.client}: ${project.title}`;
  const projectMeta = [project.role, project.year === "TBD" ? null : project.year].filter(Boolean).join(" / ");

  return (
    <motion.article
      id={`project-${project.slug}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.24) }}
      className="grid min-w-0 scroll-mt-24 gap-2"
    >
      {project.previewVideo && project.finalVideoUrl ? (
        <a
          href={project.finalVideoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Watch ${title}`}
          className="group relative block aspect-video overflow-hidden bg-bone/[0.04]"
        >
          <LoopingPreviewVideo
            src={project.previewVideo}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.015]"
          />
        </a>
      ) : project.previewGif && project.finalVideoUrl ? (
        <a
          href={project.finalVideoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Watch ${title}`}
          className="group relative block aspect-video overflow-hidden bg-bone/[0.04]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.previewGif}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.015]"
          />
        </a>
      ) : project.videoEmbedUrl && project.finalVideoUrl ? (
        <VideoEmbed title={title} src={project.videoEmbedUrl} sourceUrl={project.finalVideoUrl} theme="dark" />
      ) : (
        <FilmFrame project={project} label={project.title} className="aspect-video" />
      )}

      {project.finalVideoUrl ? (
        <a
          href={project.finalVideoUrl}
          target="_blank"
          rel="noreferrer"
          className="break-words text-[11px] lowercase leading-4 text-bone/56 transition-colors hover:text-bone"
        >
          <span className="text-bone/78">
            {project.client.toLowerCase()} / {project.title.toLowerCase()}
          </span>
          <br />
          {projectMeta.toLowerCase()}
        </a>
      ) : (
        <p className="break-words text-[11px] lowercase leading-4 text-bone/56">
          <span className="text-bone/78">
            {project.client.toLowerCase()} / {project.title.toLowerCase()}
          </span>
          <br />
          {projectMeta.toLowerCase()}
        </p>
      )}
    </motion.article>
  );
}
