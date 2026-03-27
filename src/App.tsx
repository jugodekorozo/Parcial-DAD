import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  FileArchive,
  GraduationCap,
  Layers3,
  MoonStar,
} from "lucide-react";
import { DeliverableCard } from "./components/DeliverableCard";
import { MobileRubricCards } from "./components/MobileRubricCards";
import { ReadingProgress } from "./components/ReadingProgress";
import { RubricTable } from "./components/RubricTable";
import { Section } from "./components/Section";
import { Sidebar } from "./components/Sidebar";
import { ThemeToggle } from "./components/ThemeToggle";
import {
  courseInfo,
  deliverables,
  gradeScale,
  recommendations,
  rubricCriteria,
  sections,
  technicalSpecs,
} from "./data/brief";

const themeStorageKey = "brief-theme";

function getInitialTheme() {
  const stored = window.localStorage.getItem(themeStorageKey);
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function useRevealOnScroll() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [progress, setProgress] = useState(0);
  const [openDeliverable, setOpenDeliverable] = useState(deliverables[0]?.id ?? "");

  useEffect(() => {
    setDarkMode(getInitialTheme());
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem(themeStorageKey, darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        documentHeight <= 0 ? 0 : Math.min((scrollTop / documentHeight) * 100, 100);
      setProgress(nextProgress);

      const nodes = Array.from(
        document.querySelectorAll<HTMLElement>("[data-section]"),
      );

      let current = "hero";
      for (const node of nodes) {
        const top = node.getBoundingClientRect().top;
        if (top <= 160) {
          current = node.id;
        }
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useRevealOnScroll();

  const navSections = useMemo(
    () => sections.map(({ id, label }) => ({ id, label })),
    [],
  );

  return (
    <div className="min-h-screen bg-haze text-ink transition-colors duration-300 dark:bg-midnight dark:text-haze">
      <ReadingProgress progress={progress} />

      <Sidebar
        sections={navSections}
        activeSection={activeSection}
        isOpen={navOpen}
        onOpen={() => setNavOpen(true)}
        onClose={() => setNavOpen(false)}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-5rem] h-72 w-72 rounded-full bg-secondary/30 blur-3xl dark:bg-secondary/15" />
        <div className="absolute right-[-10rem] top-[18rem] h-80 w-80 rounded-full bg-primary/20 blur-3xl dark:bg-primary/20" />
        <div className="absolute inset-0 bg-grid bg-[size:24px_24px] opacity-50 dark:opacity-20" />
      </div>

      <main className="relative lg:pl-[18rem]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-16 pt-20 sm:px-6 lg:px-10 lg:pt-10">
          <div className="sticky top-4 z-20 flex justify-end gap-3 self-end print:hidden">
            <ThemeToggle
              darkMode={darkMode}
              onToggle={() => setDarkMode((value) => !value)}
            />
          </div>

          <Section id="hero" title={sections[0].title} eyebrow={sections[0].eyebrow}>
            <div className="relative overflow-hidden rounded-[1.75rem] bg-hero p-6 text-haze sm:p-8 lg:p-10">
              <div className="absolute inset-0 bg-glow opacity-70" />
              <div className="absolute right-0 top-0 h-full w-1/2 bg-shine" />
              <div className="absolute -right-16 top-10 h-56 w-56 rotate-12 rounded-[2rem] border border-haze/20 bg-haze/10" />
              <div className="absolute bottom-6 right-10 h-20 w-20 rotate-45 rounded-3xl border border-haze/20 bg-tertiary/25" />

              <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)] lg:items-end">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-warm">
                    Propuesta profesional de preproducción
                  </p>
                  <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                    Brief de Proyecto:
                    <span className="mt-2 block text-secondary">
                      Cortometraje Animado
                    </span>
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-7 text-haze sm:text-lg">
                    Un dossier de trabajo para diseñar la etapa de preproducción
                    con criterio narrativo, rigor técnico y dirección artística
                    consistente.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3 text-sm">
                    <span className="inline-flex items-center gap-2 rounded-full border border-haze/20 bg-midnight/25 px-4 py-2 text-haze">
                      <GraduationCap size={16} />
                      {courseInfo.subject}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-haze/20 bg-midnight/25 px-4 py-2 text-haze">
                      <Layers3 size={16} />
                      {courseInfo.institution} • {courseInfo.term}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-haze/20 bg-midnight/25 px-4 py-2 text-haze">
                      <MoonStar size={16} />
                      {courseInfo.teacher}
                    </span>
                  </div>
                </div>

                <div className="relative grid gap-4">
                  <div className="rounded-[1.5rem] border border-haze/20 bg-midnight/30 p-5 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-haze">
                      Entregables
                    </p>
                    <p className="mt-3 text-3xl font-semibold">4</p>
                    <p className="mt-2 text-sm text-haze">
                      Guion, storyboard, character sheet y moodboard como sistema
                      integrado.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-haze/20 bg-midnight/30 p-5 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-warm">
                      Formato
                    </p>
                    <p className="mt-3 text-sm leading-6 text-haze">
                      PDF compilado o carpeta organizada, listo para presentar a
                      un cliente, productor o jurado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section
            id="contexto"
            title={sections[1].title}
            eyebrow="Marco del encargo"
          >
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-5 text-base leading-8 text-ink/80 dark:text-haze/80">
                {sections[1].content?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <aside className="rounded-[1.6rem] border border-dashed border-warm/35 bg-warm/10 p-6 dark:bg-warm/10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-warm">
                  Lectura recomendada
                </p>
                <p className="mt-4 text-sm leading-7 text-ink/85 dark:text-haze/80">
                  Piensen este brief como una carpeta base de estudio: cada
                  decisión escrita debe dejar rastro visual y cada decisión visual
                  debe tener una razón narrativa.
                </p>
              </aside>
            </div>
          </Section>

          <Section
            id="objetivo"
            title={sections[2].title}
            eyebrow="Resultado formativo"
          >
            <div className="rounded-[1.75rem] border border-midnight/20 bg-gradient-to-br from-haze/40 to-secondary/15 p-6 dark:border-haze/15 dark:from-midnight dark:to-paper/20">
              <p className="max-w-4xl text-lg leading-8 text-ink/85 dark:text-haze/80">
                {sections[2].content?.[0]}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Guion", "Storyboard", "Diseño de personajes", "Dirección artística"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-midnight/20 bg-midnight/5 px-4 py-2 text-sm font-medium text-ink shadow-sm dark:border-haze/15 dark:bg-midnight/55 dark:text-haze"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </Section>

          <Section
            id="entregables"
            title={sections[3].title}
            eyebrow="Sección central"
          >
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-3xl text-base leading-7 text-ink/80 dark:text-haze/75">
                {sections[3].content?.[0]}
              </p>
              <div className="rounded-full border border-midnight/20 bg-midnight/5 px-4 py-2 text-sm font-medium text-ink dark:border-haze/15 dark:bg-paper/20 dark:text-haze">
                Entregables evaluados por calidad individual y coherencia global
              </div>
            </div>

            <div className="grid gap-5">
              {deliverables.map((deliverable) => (
                <DeliverableCard
                  key={deliverable.id}
                  deliverable={deliverable}
                  open={openDeliverable === deliverable.id}
                  onToggle={() =>
                    setOpenDeliverable((current) =>
                      current === deliverable.id ? "" : deliverable.id,
                    )
                  }
                />
              ))}
            </div>
          </Section>

          <Section
            id="especificaciones"
            title={sections[4].title}
            eyebrow="Entrega y formato"
          >
            <div className="grid gap-5 md:grid-cols-2">
              {technicalSpecs.map((spec) => (
                <div
                  key={spec}
                  className="reveal flex gap-4 rounded-[1.5rem] border border-midnight/20 bg-midnight/5 p-5 dark:border-haze/15 dark:bg-paper/20"
                >
                  <div className="mt-1 h-3 w-3 flex-none rounded-full bg-warm" />
                  <p className="text-sm leading-7 text-ink/80 dark:text-haze/75">
                    {spec}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section
            id="rubrica"
            title={sections[5].title}
            eyebrow="Criterios analíticos"
          >
            <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-3xl text-base leading-7 text-ink/80 dark:text-haze/75">
                La evaluación pondera cinco criterios principales.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-tertiary/40 bg-secondary/25 px-4 py-2 text-sm font-medium text-ink dark:text-haze">
                <FileArchive size={16} />
                Total ponderado: 100%
              </div>
            </div>

            <RubricTable criteria={rubricCriteria} />
            <MobileRubricCards criteria={rubricCriteria} />

            <div className="mt-8 rounded-[1.75rem] border border-midnight/20 bg-midnight/5 p-6 dark:border-haze/15 dark:bg-paper/20">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-warm">
                    Escala de calificación
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-ink dark:text-haze">
                    Referencia complementaria de desempeño
                  </h3>
                </div>
                <p className="text-sm text-ink/70 dark:text-haze/65">
                  Nota mínima aprobatoria institucional: 3.0
                </p>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {gradeScale.map((item) => (
                  <div
                    key={item.level}
                    className="reveal rounded-[1.4rem] border border-midnight/20 bg-haze/35 p-5 dark:border-haze/15 dark:bg-midnight/45"
                  >
                    <p className="text-sm font-semibold text-ink dark:text-haze">
                      {item.level}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-warm">
                      {item.range}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-ink/80 dark:text-haze/75">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section
            id="recomendaciones"
            title={sections[6].title}
            eyebrow="Ruta de trabajo"
          >
            <div className="grid gap-4">
              {recommendations.map((recommendation, index) => (
                <div
                  key={recommendation.id}
                  className="reveal flex gap-4 rounded-[1.5rem] border border-midnight/20 bg-midnight/5 p-5 transition hover:border-secondary/40 hover:bg-secondary/15 dark:border-haze/15 dark:bg-paper/20 dark:hover:bg-secondary/15"
                >
                  <div className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-tertiary text-haze text-sm font-semibold dark:bg-tertiary dark:text-haze">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm leading-7 text-ink/82 dark:text-haze/78">
                      {recommendation.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <section className="reveal rounded-[2rem] border border-midnight/20 bg-accent p-6 shadow-panel shadow-midnight/10 dark:border-haze/15 dark:bg-accentDark">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-warm">
                  Cierre editorial
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-ink dark:text-haze">
                  Una propuesta sólida se lee como un sistema, no como piezas
                  sueltas.
                </h2>
                <p className="mt-4 text-base leading-7 text-ink/82 dark:text-haze/75">
                  Si el guion, el storyboard, el character sheet y el moodboard se
                  responden entre sí, la carpeta deja de ser una tarea académica y
                  empieza a sentirse como preproducción real.
                </p>
              </div>
              <a
                href="#hero"
                className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-3 text-sm font-semibold text-midnight transition hover:-translate-y-0.5 hover:bg-primary/90 dark:bg-primary dark:text-midnight dark:hover:bg-primary/80"
              >
                Volver al inicio
                <ArrowRight size={16} />
              </a>
            </div>
          </section>

          <p className="pb-2 text-center text-sm text-ink/75 dark:text-haze/75">
            Prof. Odis - ocorzo@areandina.edu.co - 2026
          </p>

        </div>
      </main>
    </div>
  );
}

export default App;
