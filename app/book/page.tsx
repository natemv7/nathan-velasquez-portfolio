import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ProjectInquiryForm } from "@/components/ProjectInquiryForm";
import { profileMedia } from "@/lib/projects";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-ink text-bone">
      <Navigation />

      <section className="mx-auto grid max-w-[1600px] gap-x-4 gap-y-6 px-4 pb-16 pt-28 sm:px-6 md:grid-cols-[0.32fr_0.42fr_1fr] lg:px-8">
        <div className="text-[11px] lowercase leading-4 text-bone/54">
          <p>book</p>
          <Link href="/" className="transition-colors hover:text-bone">
            back to work
          </Link>
        </div>

        <div className="relative aspect-[4/5] min-h-0 overflow-hidden bg-bone/[0.03]">
            <Image
              src={profileMedia.portrait}
              alt="Nathan Velasquez seated with camera equipment."
              fill
            sizes="(min-width: 768px) 28vw, 100vw"
            className="object-cover object-[50%_14%]"
            />
        </div>

        <div className="grid min-w-0 gap-5">
          <div className="max-w-2xl text-[13px] leading-5 text-bone/68">
            <p>send the basics and nathan will follow up with availability, next steps, and the cleanest path forward.</p>
          </div>
          <ProjectInquiryForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
