import type { Metadata } from "next";
import { contact } from "@/lib/projects";
import { defaultDescription, defaultTitle, ogImage, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "Nathan Velasquez",
    "Nathan Velasquez director",
    "Nathan Velasquez editor",
    "Springfield Massachusetts director",
    "music video director",
    "music video editor",
    "commercial director",
    "commercial editor",
    "fashion video director",
    "VFX artist",
    "Oasis Nate",
    "oasisnate",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
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
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: siteName,
      alternateName: "Oasis Nate",
      url: siteUrl,
      image: `${siteUrl}/media/profile/nathan-portrait.jpg`,
      jobTitle: ["Director", "Editor", "Cinematographer", "VFX Artist"],
      email: contact.email,
      sameAs: [contact.instagram, contact.linkedin],
      knowsAbout: [
        "Music videos",
        "Commercial campaigns",
        "Editing",
        "Cinematography",
        "Fashion visuals",
        "Documentary shorts",
        "Visual effects",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: defaultTitle,
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
