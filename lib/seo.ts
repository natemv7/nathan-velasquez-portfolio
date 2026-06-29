import type { Metadata } from "next";

export const siteUrl = "https://natevelasquez.net";
export const siteName = "Nathan Velasquez";
export const defaultTitle = "Nathan Velasquez | Director & Editor";
export const defaultDescription =
  "Nathan Velasquez is a director and editor creating music videos, commercials, campaign films, documentary pieces, fashion visuals, and VFX driven work.";
export const ogImage = "/media/seo/og-image.jpg";

export function pageMetadata({
  title,
  description = defaultDescription,
  path = "/",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = new URL(path, siteUrl);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "OASIS clothing, production, and visual work collage by Nathan Velasquez.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
