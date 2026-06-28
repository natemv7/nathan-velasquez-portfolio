type SectionTitleProps = {
  eyebrow: string;
  title: string;
  aside?: string;
};

export function SectionTitle({ eyebrow, title, aside }: SectionTitleProps) {
  return (
    <div className="grid gap-6 border-t border-bone/15 pt-5 md:grid-cols-[0.7fr_2fr_1fr]">
      <p className="text-xs font-semibold uppercase text-signal">{eyebrow}</p>
      <h2 className="font-display text-4xl font-black uppercase leading-none text-bone sm:text-5xl lg:text-7xl">
        {title}
      </h2>
      {aside ? <p className="max-w-sm text-sm leading-6 text-bone/58 md:justify-self-end">{aside}</p> : null}
    </div>
  );
}
