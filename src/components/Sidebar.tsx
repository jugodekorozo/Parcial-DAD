import { Menu, X } from "lucide-react";
import { courseInfo } from "../data/brief";

type NavSection = {
  id: string;
  label: string;
};

type SidebarProps = {
  sections: NavSection[];
  activeSection: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function NavLinks({
  sections,
  activeSection,
  onNavigate,
}: {
  sections: NavSection[];
  activeSection: string;
  onNavigate?: () => void;
}) {
  return (
    <nav className="space-y-1">
      {sections.map((section, index) => {
        const isActive = activeSection === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={onNavigate}
            className={`group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm transition ${
              isActive
                ? "bg-navy text-midnight shadow-lg shadow-midnight/20 dark:bg-navy dark:text-midnight"
                : "text-ink/75 hover:bg-midnight/10 hover:text-ink dark:text-haze/70 dark:hover:bg-haze/10 dark:hover:text-haze"
            }`}
          >
            <span
              className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                isActive
                  ? "bg-midnight/15 text-midnight dark:bg-midnight/45 dark:text-haze"
                  : "bg-midnight/10 text-ink/70 dark:bg-haze/10 dark:text-haze/70"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-medium">{section.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

export function Sidebar({
  sections,
  activeSection,
  isOpen,
  onOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        aria-label="Abrir navegación"
        className="fixed left-4 top-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-midnight/20 bg-haze/55 text-ink shadow-lg shadow-midnight/10 backdrop-blur lg:hidden print:hidden dark:border-haze/15 dark:bg-midnight/85 dark:text-haze"
      >
        <Menu size={18} />
      </button>

      <div
        className={`fixed inset-0 z-30 bg-midnight/70 transition lg:hidden print:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed left-0 top-0 z-40 flex h-full w-[18rem] flex-col overflow-y-auto border-r border-midnight/20 bg-surface/95 px-5 pb-6 pt-6 backdrop-blur lg:translate-x-0 print:hidden dark:border-haze/15 dark:bg-midnight/92 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-out`}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-warm">
              Studio Brief
            </p>
            <h1 className="mt-2 text-lg font-semibold text-ink dark:text-haze">
              Cortometraje Animado
            </h1>
            <div className="mt-2 space-y-0.5 text-sm text-ink/70 dark:text-haze/70">
              <p>{courseInfo.subject}</p>
              <p>{courseInfo.program}</p>
              <p>{courseInfo.institution}</p>
              <p>{courseInfo.term}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar navegación"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-midnight/20 text-ink lg:hidden dark:border-haze/15 dark:text-haze"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mb-6 rounded-[1.5rem] border border-midnight/20 bg-midnight/5 p-4 shadow-sm dark:border-haze/15 dark:bg-haze/10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-warm">
            Docente
          </p>
          <p className="mt-2 text-sm font-bold [font-family:'Poppins',ui-sans-serif,system-ui,sans-serif] text-ink dark:text-haze">
            {courseInfo.teacher}
          </p>
        </div>

        <NavLinks
          sections={sections}
          activeSection={activeSection}
          onNavigate={onClose}
        />
      </aside>
    </>
  );
}
