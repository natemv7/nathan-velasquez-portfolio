import { contact, partners } from "@/lib/projects";

export function Footer() {
  return (
    <footer id="contact" className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1600px] gap-x-4 gap-y-4 border-t border-bone/12 pt-4 text-[11px] lowercase leading-4 text-bone/58 md:grid-cols-[0.32fr_1fr]">
        <p>contact</p>
        <div className="grid gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
          <a href="/book" className="transition-colors hover:text-bone">
            book a project
          </a>
          <a href={`mailto:${contact.email}`} className="transition-colors hover:text-bone">
            email
          </a>
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="hover:text-bone">
            instagram
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-bone">
            linkedin
            </a>
            <a href={partners.postHouseUrl} target="_blank" rel="noreferrer" className="hover:text-bone">
            {partners.postHouseName.toLowerCase()}
            </a>
        </div>
      </div>
    </footer>
  );
}
