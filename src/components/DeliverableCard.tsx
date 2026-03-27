import { ChevronDown } from "lucide-react";
import type { Deliverable } from "../types";

type DeliverableCardProps = {
  deliverable: Deliverable;
  open: boolean;
  onToggle: () => void;
};

export function DeliverableCard({
  deliverable,
  open,
  onToggle,
}: DeliverableCardProps) {
  const Icon = deliverable.icon;

  return (
    <article className="reveal overflow-hidden rounded-[1.75rem] border border-midnight/20 bg-gradient-to-br from-haze/45 to-secondary/20 shadow-panel shadow-midnight/10 dark:border-haze/15 dark:from-midnight dark:to-paper/20 dark:shadow-none">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
      >
        <div className="flex items-start gap-4">
          <div className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-haze shadow-lg shadow-midnight/15 dark:bg-lime dark:text-haze">
            <Icon size={22} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ink dark:text-haze">
              {deliverable.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/80 dark:text-haze/80">
              {deliverable.summary}
            </p>
          </div>
        </div>

        <span
          className={`mt-2 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-midnight/20 text-ink transition ${
            open ? "rotate-180 bg-navy text-midnight dark:bg-navy dark:text-midnight" : ""
          } dark:border-haze/15 dark:text-haze`}
        >
          <ChevronDown size={18} />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-midnight/15 px-5 pb-6 pt-4 sm:px-6 dark:border-haze/15">
            <ul className="space-y-3">
              {deliverable.requirements.map((requirement) => (
                <li
                  key={requirement}
                  className="flex gap-3 text-sm leading-6 text-ink/80 dark:text-haze/80"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-warm" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
            {deliverable.formatNote ? (
              <p className="mt-5 rounded-2xl border border-dashed border-tertiary/40 bg-tertiary/10 px-4 py-3 text-sm text-ink dark:bg-tertiary/15 dark:text-haze">
                {deliverable.formatNote}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
