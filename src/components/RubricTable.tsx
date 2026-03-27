import type { RubricCriterion } from "../types";

type RubricTableProps = {
  criteria: RubricCriterion[];
};

const levels = [
  { key: "excellent", label: "Excelente", range: "4.5 - 5.0" },
  { key: "good", label: "Bueno", range: "3.5 - 4.4" },
  { key: "acceptable", label: "Aceptable", range: "3.0 - 3.4" },
  { key: "insufficient", label: "Insuficiente", range: "0 - 2.9" },
] as const;

export function RubricTable({ criteria }: RubricTableProps) {
  return (
    <div className="hidden overflow-hidden rounded-[1.75rem] border border-midnight/20 lg:block dark:border-haze/15">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-midnight text-left text-sm text-haze dark:bg-midnight dark:text-haze">
            <tr>
              <th className="px-5 py-4 font-semibold">Criterio</th>
              <th className="px-5 py-4 font-semibold">Peso</th>
              {levels.map((level) => (
                <th key={level.key} className="px-5 py-4 font-semibold">
                  <span className="block">{level.label}</span>
                  <span className="mt-1 block text-xs font-normal text-haze/75 dark:text-haze/70">
                    {level.range}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-midnight/15 bg-haze/30 text-sm dark:divide-haze/15 dark:bg-paper/20">
            {criteria.map((criterion) => (
              <tr
                key={criterion.id}
                className="align-top transition hover:bg-navy/10 dark:hover:bg-navy/12"
              >
                <td className="px-5 py-5">
                  <p className="font-semibold text-ink dark:text-haze">
                    {criterion.name}
                  </p>
                </td>
                <td className="px-5 py-5">
                  <div className="min-w-[7rem]">
                    <span className="inline-flex rounded-full bg-warm px-3 py-1 text-xs font-semibold text-midnight dark:bg-warm dark:text-midnight">
                      {criterion.weight}%
                    </span>
                    <div className="mt-3 h-2 rounded-full bg-midnight/10 dark:bg-haze/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-secondary via-primary to-tertiary"
                        style={{ width: `${criterion.weight * 4}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 text-ink/80 dark:text-haze/80">
                  {criterion.excellent}
                </td>
                <td className="px-5 py-5 text-ink/80 dark:text-haze/80">
                  {criterion.good}
                </td>
                <td className="px-5 py-5 text-ink/80 dark:text-haze/80">
                  {criterion.acceptable}
                </td>
                <td className="px-5 py-5 text-ink/80 dark:text-haze/80">
                  {criterion.insufficient}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
