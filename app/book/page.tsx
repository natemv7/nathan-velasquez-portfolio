import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ProjectInquiryForm } from "@/components/ProjectInquiryForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book A Project",
  description:
    "Book Nathan Velasquez for music videos, commercials, edits, campaign films, reels, visual rollouts, and post production.",
  path: "/book",
});

export default function BookPage() {
  return (
    <main className="min-h-screen bg-ink text-bone">
      <Navigation />

      <section className="mx-auto grid max-w-[1600px] gap-x-4 gap-y-8 px-4 pb-16 pt-28 sm:px-6 md:grid-cols-[0.32fr_1fr] lg:px-8">
        <div className="text-[11px] lowercase leading-4 text-bone/54">
          <p>book</p>
          <Link href="/" className="transition-colors hover:text-bone">
            back to work
          </Link>
        </div>

        <div className="grid min-w-0 gap-10">
          <div className="grid gap-5 md:grid-cols-[0.62fr_0.38fr]">
            <h1 className="max-w-4xl text-[clamp(42px,8vw,118px)] font-medium lowercase leading-[0.9] tracking-normal text-bone">
              start the visual.
            </h1>
            <div className="grid content-end gap-3 text-[13px] leading-5 text-bone/62">
              <p>
                Tell me what you are making, what is locked, what is missing, and how hard the deadline is.
              </p>
              <p className="text-bone/44">Email or phone works. The inquiry goes straight to Nathan.</p>
            </div>
          </div>
          <ProjectInquiryForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
