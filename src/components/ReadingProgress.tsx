type ReadingProgressProps = {
  progress: number;
};

export function ReadingProgress({ progress }: ReadingProgressProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-transparent print:hidden">
      <div
        className="h-full bg-gradient-to-r from-lime via-warm to-navy transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
