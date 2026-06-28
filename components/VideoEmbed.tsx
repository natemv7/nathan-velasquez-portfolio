type VideoEmbedProps = {
  title: string;
  src: string;
  sourceUrl: string;
  theme?: "light" | "dark";
};

export function VideoEmbed({ title, src }: VideoEmbedProps) {
  return (
    <div className="min-w-0">
      <div className="min-w-0 overflow-hidden bg-black">
        <div className="aspect-video w-full bg-black">
          <iframe
            src={src}
            title={title}
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
