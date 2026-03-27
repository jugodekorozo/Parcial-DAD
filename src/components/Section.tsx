import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  title: string;
  eyebrow?: string;
  className?: string;
}>;

export function Section({
  id,
  title,
  eyebrow,
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      data-section
      className={`reveal rounded-[2rem] border border-midnight/20 bg-haze/35 p-6 shadow-panel shadow-midnight/10 backdrop-blur sm:p-8 dark:border-haze/15 dark:bg-paper/25 dark:shadow-none ${className}`}
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="h-14 w-1 rounded-full bg-gradient-to-b from-lime via-warm to-navy" />
        <div>
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-warm">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl dark:text-haze">
            {title}
          </h2>
        </div>
      </div>
      {children}
    </section>
  );
}
