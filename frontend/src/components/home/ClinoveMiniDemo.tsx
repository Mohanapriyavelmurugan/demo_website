import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, HeartPulse } from "lucide-react";
import { cn } from "@/lib/utils";

type Vitals = {
  age: string;
  hba1c: string;
  sbp: string;
  dbp: string;
  bmi: string;
};

const empty: Vitals = { age: "", hba1c: "", sbp: "", dbp: "", bmi: "" };

function curatedLabs(v: Vitals) {
  const labs = [
    { code: "HbA1c", reason: "Glycemic status confirmation and trend assessment" },
    { code: "FBS / PPBS", reason: "Day-to-day glycemic pattern evaluation" },
    { code: "eGFR / Creatinine", reason: "Renal risk stratification before therapy adjustment" },
    { code: "Lipid panel", reason: "Cardiovascular risk profiling" },
  ];
  const hba1c = Number(v.hba1c);
  const bmi = Number(v.bmi);
  if (!Number.isNaN(hba1c) && hba1c >= 8) {
    labs.push({ code: "Urine ACR", reason: "Microvascular risk screening at elevated HbA1c" });
  }
  if (!Number.isNaN(bmi) && bmi >= 27) {
    labs.push({ code: "ALT / AST", reason: "Hepatic assessment prior to selected pharmacotherapy" });
  }
  return labs;
}

/** Compact interactive demo: vitals → curated lab panel. */
export function ClinoveMiniDemo() {
  const [vitals, setVitals] = useState<Vitals>({
    age: "54",
    hba1c: "8.4",
    sbp: "142",
    dbp: "88",
    bmi: "28.6",
  });
  const [submitted, setSubmitted] = useState(false);

  const labs = useMemo(() => curatedLabs(vitals), [vitals]);

  const onChange = (key: keyof Vitals) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setVitals((prev) => ({ ...prev, [key]: e.target.value }));
    setSubmitted(false);
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary";

  return (
    <div className="grid gap-8 lg:grid-cols-12" data-testid="clinove-mini-demo">
      <div className="lg:col-span-5">
        <p className="eyebrow">Interactive preview</p>
        <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
          From vitals to diagnostic evaluation.
        </h2>
        <p className="copy-compact mt-4">
          Enter outpatient vitals. ClinoveAI curates a patient-specific laboratory panel to support
          physician decision making. This preview does not generate a clinical report.
        </p>
      </div>

      <div className="lg:col-span-7">
        <div className="surface overflow-hidden">
          <div className="flex items-center gap-2 border-b border-border px-5 py-3">
            <HeartPulse className="h-4 w-4 text-primary" />
            <p className="text-sm font-medium text-foreground">Patient Data Acquisition</p>
          </div>

          <form
            className="grid gap-4 p-5 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            {(
              [
                ["age", "Age (years)"],
                ["hba1c", "HbA1c (%)"],
                ["sbp", "Systolic BP (mmHg)"],
                ["dbp", "Diastolic BP (mmHg)"],
                ["bmi", "BMI"],
              ] as const
            ).map(([key, label]) => (
              <label key={key} className="space-y-1.5 text-sm">
                <span className="text-muted-foreground">{label}</span>
                <input
                  value={vitals[key]}
                  onChange={onChange(key)}
                  className={inputClass}
                  inputMode="decimal"
                  required
                />
              </label>
            ))}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/95"
              >
                Curate laboratory panel
              </button>
            </div>
          </form>

          <div
            className={cn(
              "border-t border-border bg-secondary/30 px-5 py-5 transition-opacity",
              submitted ? "opacity-100" : "opacity-50"
            )}
          >
            <div className="mb-3 flex items-center gap-2">
              <FlaskConical className="h-4 w-4 text-primary" />
              <p className="text-sm font-medium text-foreground">Recommended Diagnostic Evaluation</p>
            </div>
            {submitted ? (
              <ul className="space-y-2">
                {labs.map((lab) => (
                  <li key={lab.code} className="grid gap-0.5 sm:grid-cols-[140px_1fr]">
                    <span className="text-sm font-medium text-foreground">{lab.code}</span>
                    <span className="text-sm text-muted-foreground">{lab.reason}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">
                Submit vitals to generate a curated laboratory panel for physician review.
              </p>
            )}
          </div>

          <div className="border-t border-border px-5 py-4">
            <Link
              to="/product"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Know more about the product <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
