import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { RubricCriterion } from "../types";

type MobileRubricCardsProps = {
  criteria: RubricCriterion[];
};

const levels = [
  {
    key: "excellent",
    label: "Excelente",
    range: "4.5 - 5.0",
    tone: "bg-secondary/25 text-tertiary dark:text-secondary",
  },
  {
    key: "good",
    label: "Bueno",
    range: "3.5 - 4.4",
    tone: "bg-primary/15 text-primary dark:text-secondary",
  },
  {
    key: "acceptable",
    label: "Aceptable",
    range: "3.0 - 3.4",
    tone: "bg-warm/15 text-tertiary dark:text-warm",
  },
  {
    key: "insufficient",
    label: "Insuficiente",
    range: "0 - 2.9",
    tone: "bg-midnight/10 text-midnight dark:text-haze",
  },
] as const;

export function MobileRubricCards({ criteria }: MobileRubricCardsProps) {
  const [openId, setOpenId] = useState(criteria[0]?.id ?? "");

  return (
    <div className="space-y-4 lg:hidden">
      {criteria.map((criterion) => {
        const open = openId === criterion.id;
        return (
          <article
            key={criterion.id}
            className="overflow-hidden rounded-[1.5rem] border border-midnight/20 bg-haze/30 dark:border-haze/15 dark:bg-paper/20"
          >
            <button
              type="button"
              onClick={() => setOpenId(open ? "" : criterion.id)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-semibold text-ink dark:text-haze">
                    {criterion.name}
                  </h3>
                  <span className="rounded-full bg-warm px-2.5 py-1 text-xs font-semibold text-midnight dark:bg-warm dark:text-midnight">
                    {criterion.weight}%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-midnight/10 dark:bg-haze/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-secondary via-primary to-tertiary"
                    style={{ width: `${criterion.weight * 4}%` }}
                  />
                </div>
              </div>
              <span
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-midnight/20 text-ink transition ${
                  open ? "rotate-180 bg-primary text-midnight dark:bg-primary dark:text-midnight" : ""
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
                <div className="space-y-3 border-t border-midnight/15 px-5 pb-5 pt-4 dark:border-haze/15">
                  {levels.map((level) => {
                    const content = criterion[level.key];
                    return (
                      <div
                        key={level.key}
                        className="rounded-2xl border border-midnight/15 bg-midnight/5 p-4 dark:border-haze/15 dark:bg-midnight/40"
                      >
                        <p
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${level.tone}`}
                        >
                          {level.label} • {level.range}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-ink/80 dark:text-haze/80">
                          {content}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
