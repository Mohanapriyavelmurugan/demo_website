/** One or more PQRST beats on a flat baseline. Same command count for any amp, so paths can morph (amp 0 = flat trace). */
export type EcgOpts = {
  width: number;
  height: number;
  beats?: number[];
  amp?: number;
  unit?: number;
  baseline?: number;
};

const f = (n: number) => Math.round(n * 10) / 10;

export function ecgPath({
  width,
  height,
  beats = [0.5],
  amp = 1,
  unit,
  baseline,
}: EcgOpts): string {
  const u = unit ?? height / 5;
  const b = baseline ?? height * 0.62;
  const a = amp;
  let d = `M0 ${f(b)}`;
  for (const t of beats) {
    const cx = width * t;
    d +=
      ` L${f(cx - 3.4 * u)} ${f(b)}` +
      ` Q${f(cx - 2.8 * u)} ${f(b - 0.45 * u * a)} ${f(cx - 2.2 * u)} ${f(b)}` +
      ` L${f(cx - 0.7 * u)} ${f(b)}` +
      ` L${f(cx - 0.42 * u)} ${f(b + 0.5 * u * a)}` +
      ` L${f(cx)} ${f(b - 2.6 * u * a)}` +
      ` L${f(cx + 0.42 * u)} ${f(b + 0.9 * u * a)}` +
      ` L${f(cx + 0.9 * u)} ${f(b)}` +
      ` L${f(cx + 1.7 * u)} ${f(b)}` +
      ` Q${f(cx + 2.6 * u)} ${f(b - 0.75 * u * a)} ${f(cx + 3.5 * u)} ${f(b)}`;
  }
  return d + ` L${f(width)} ${f(b)}`;
}
