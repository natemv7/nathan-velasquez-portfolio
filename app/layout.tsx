import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nathan Velasquez | Director & Editor",
  description:
    "Nathan Velasquez is a director and editor creating music videos, commercials, campaign films, documentary pieces, fashion recaps, and visual effects work.",
  keywords: [
    "Nathan Velasquez",
    "Director",
    "Editor",
    "Music Video Director",
    "Commercial Editor",
    "VFX Artist",
    "Nike",
    "Music Video Editor",
  ],
  openGraph: {
    title: "Nathan Velasquez | Director & Editor",
    description:
      "Cinematic music videos, commercials, spec ads, fashion visuals, documentary pieces, and visual effects work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
