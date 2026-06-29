import Link from "next/link";

const links = [
  { label: "Work", href: "/#selected-work" },
  { label: "Reel", href: "/#reel" },
  { label: "About", href: "/about" },
  { label: "Book", href: "/book" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-ink">
      <nav className="mx-auto flex max-w-[1600px] items-start justify-between px-4 py-5 text-[11px] leading-4 text-bone/72 sm:px-6 lg:px-8">
        <Link href="/" className="transition-colors hover:text-bone" aria-label="Nathan Velasquez home">
          nathan velasquez
          <br />
          director / editor
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="lowercase transition-colors hover:text-bone">
              {link.label.toLowerCase()}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
