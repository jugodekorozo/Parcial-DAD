import { MoonStar, SunMedium } from "lucide-react";

type ThemeToggleProps = {
  darkMode: boolean;
  onToggle: () => void;
};

export function ThemeToggle({ darkMode, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-midnight/20 bg-haze/40 text-ink shadow-lg shadow-midnight/10 backdrop-blur transition hover:-translate-y-0.5 hover:bg-haze/60 dark:border-haze/20 dark:bg-haze/10 dark:text-haze dark:hover:bg-haze/20"
    >
      {darkMode ? <SunMedium size={18} /> : <MoonStar size={18} />}
    </button>
  );
}
