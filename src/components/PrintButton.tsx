import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      aria-label="Exportar brief como PDF"
      className="inline-flex items-center gap-2 rounded-full bg-warm px-4 py-2.5 text-sm font-semibold text-midnight transition hover:-translate-y-0.5 hover:bg-warm/85 dark:bg-warm dark:text-midnight dark:hover:bg-warm/80"
    >
      <Printer size={16} />
      Exportar como PDF
    </button>
  );
}
