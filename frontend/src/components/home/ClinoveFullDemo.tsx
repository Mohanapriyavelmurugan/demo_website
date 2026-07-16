import React, { useMemo, useState } from "react";
import {
  CheckCircle2,
  ClipboardList,
  FlaskConical,
  FileText,
  HeartPulse,
  Salad,
  Dumbbell,
  Pill,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Vitals = {
  age: string;
  sex: string;
  hba1c: string;
  sbp: string;
  dbp: string;
  bmi: string;
  egfr: string;
};

type LabValues = {
  fastingGlucose: string;
  lipidsLdl: string;
  acr: string;
};

const STEPS = [
  "Patient Data Acquisition",
  "Recommended Diagnostic Evaluation",
  "Clinical Context Assembly",
  "Physician Review",
] as const;

const defaultVitals: Vitals = {
  age: "54",
  sex: "Male",
  hba1c: "8.4",
  sbp: "142",
  dbp: "88",
  bmi: "28.6",
  egfr: "72",
};

const defaultLabs: LabValues = {
  fastingGlucose: "168",
  lipidsLdl: "128",
  acr: "42",
};

function buildReport(vitals: Vitals, labs: LabValues) {
  const hba1c = Number(vitals.hba1c);
  const sbp = Number(vitals.sbp);
  const egfr = Number(vitals.egfr);
  const ldl = Number(labs.lipidsLdl);

  return {
    assessment:
      hba1c >= 8
        ? "Type 2 diabetes mellitus with suboptimal glycemic control; cardiometabolic risk factors present."
        : "Type 2 diabetes mellitus; glycemic parameters near target range with ongoing risk review indicated.",
    guideline: "Primary reference: RSSDI Clinical Practice Recommendations. Secondary: ADA Standards of Care.",
    safety:
      egfr < 60
        ? "Renal function below 60 mL/min/1.73m2 - therapy selection requires physician confirmation."
        : "No critical organ-function contraindication identified in available inputs; physician verification required.",
    diagnostics: [
      "HbA1c trend reassessment in 3 months",
      "Urine ACR follow-up",
      "Lipid panel and cardiovascular risk review",
    ],
    prescription: [
      hba1c >= 8
        ? "Consider intensification of glucose-lowering therapy per guideline pathway (physician to finalize agent and dose)."
        : "Maintain current regimen with structured titration review (physician to finalize).",
      sbp >= 140
        ? "Blood pressure above target - antihypertensive optimization for physician decision."
        : "Blood pressure within interim target band - continue monitoring.",
      ldl >= 100
        ? "LDL above preferred threshold - lipid management plan for physician decision."
        : "Lipid profile within interim band - continue lifestyle and pharmacologic review.",
    ],
    diet: [
      "Carbohydrate-controlled meal pattern aligned with diabetes medical nutrition therapy.",
      "Sodium moderation given blood pressure profile.",
      "Emphasize fiber-rich foods; limit sugar-sweetened beverages.",
    ],
    exercise: [
      "150 minutes/week moderate aerobic activity, as clinically appropriate.",
      "Resistance training 2 sessions/week if no contraindication.",
      "Foot inspection education prior to new activity programs.",
    ],
  };
}

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary";

/** Full clinical workflow demo: vitals → labs → context → report. */
export function ClinoveFullDemo() {
  const [step, setStep] = useState(0);
  const [vitals, setVitals] = useState<Vitals>(defaultVitals);
  const [selectedLabs, setSelectedLabs] = useState<string[]>([
    "HbA1c",
    "FBS / PPBS",
    "eGFR / Creatinine",
    "Lipid panel",
    "Urine ACR",
  ]);
  const [labValues, setLabValues] = useState<LabValues>(defaultLabs);
  const [reviewStatus, setReviewStatus] = useState<"Pending" | "Accepted" | "Modified" | "Discarded">(
    "Pending"
  );

  const curated = useMemo(
    () => [
      { code: "HbA1c", reason: "Glycemic status confirmation" },
      { code: "FBS / PPBS", reason: "Glycemic pattern evaluation" },
      { code: "eGFR / Creatinine", reason: "Renal risk stratification" },
      { code: "Lipid panel", reason: "Cardiovascular risk profiling" },
      { code: "Urine ACR", reason: "Microvascular risk screening" },
      { code: "ALT / AST", reason: "Hepatic assessment before selected therapies" },
    ],
    []
  );

  const report = useMemo(() => buildReport(vitals, labValues), [vitals, labValues]);

  const toggleLab = (code: string) => {
    setSelectedLabs((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  return (
    <div className="surface overflow-hidden" data-testid="clinove-full-demo">
      <div className="border-b border-border px-5 py-4 md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          ClinoveAI workflow demonstration
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Clinical workflow demonstration. Outputs require physician supervision before use.
        </p>
        <ol className="mt-4 flex flex-wrap gap-2">
          {STEPS.map((label, i) => (
            <li
              key={label}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium",
                i === step
                  ? "border-primary bg-primary text-primary-foreground"
                  : i < step
                    ? "border-primary/30 bg-primary/5 text-primary"
                    : "border-border text-muted-foreground"
              )}
            >
              {String(i + 1).padStart(2, "0")} {label}
            </li>
          ))}
        </ol>
      </div>

      <div className="p-5 md:p-6">
        {step === 0 && (
          <div>
            <div className="mb-4 flex items-center gap-2">
              <HeartPulse className="h-4 w-4 text-primary" />
              <h3 className="text-lg font-medium text-foreground">Patient Data Acquisition</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(
                [
                  ["age", "Age (years)"],
                  ["sex", "Sex"],
                  ["hba1c", "HbA1c (%)"],
                  ["sbp", "Systolic BP"],
                  ["dbp", "Diastolic BP"],
                  ["bmi", "BMI"],
                  ["egfr", "eGFR"],
                ] as const
              ).map(([key, label]) => (
                <label key={key} className="space-y-1.5 text-sm">
                  <span className="text-muted-foreground">{label}</span>
                  <input
                    className={inputClass}
                    value={vitals[key]}
                    onChange={(e) => setVitals((p) => ({ ...p, [key]: e.target.value }))}
                  />
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <div className="mb-4 flex items-center gap-2">
              <FlaskConical className="h-4 w-4 text-primary" />
              <h3 className="text-lg font-medium text-foreground">Recommended Diagnostic Evaluation</h3>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              ClinoveAI proposes a curated laboratory set from acquired vitals. The physician may
              accept or adjust the panel before proceeding.
            </p>
            <ul className="space-y-2">
              {curated.map((lab) => {
                const on = selectedLabs.includes(lab.code);
                return (
                  <li key={lab.code}>
                    <button
                      type="button"
                      onClick={() => toggleLab(lab.code)}
                      className={cn(
                        "flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left transition-colors",
                        on ? "border-primary/30 bg-primary/[0.04]" : "border-border bg-card"
                      )}
                    >
                      <CheckCircle2
                        className={cn("mt-0.5 h-4 w-4 shrink-0", on ? "text-primary" : "text-border")}
                      />
                      <span>
                        <span className="block text-sm font-medium text-foreground">{lab.code}</span>
                        <span className="mt-0.5 block text-sm text-muted-foreground">{lab.reason}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="mb-4 flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-primary" />
              <h3 className="text-lg font-medium text-foreground">Clinical Context Assembly</h3>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Vitals and selected laboratory results are assembled into a single clinical context for
              guideline-grounded reasoning.
            </p>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-border p-4">
                <p className="text-sm font-medium text-foreground">Acquired vitals</p>
                <dl className="mt-3 space-y-2 text-sm">
                  {Object.entries(vitals).map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4">
                      <dt className="capitalize text-muted-foreground">{k}</dt>
                      <dd className="text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rounded-xl border border-border p-4">
                <p className="text-sm font-medium text-foreground">Selected laboratory values</p>
                <div className="mt-3 space-y-3">
                  {(
                    [
                      ["fastingGlucose", "Fasting glucose (mg/dL)"],
                      ["lipidsLdl", "LDL-C (mg/dL)"],
                      ["acr", "Urine ACR (mg/g)"],
                    ] as const
                  ).map(([key, label]) => (
                    <label key={key} className="block space-y-1.5 text-sm">
                      <span className="text-muted-foreground">{label}</span>
                      <input
                        className={inputClass}
                        value={labValues[key]}
                        onChange={(e) => setLabValues((p) => ({ ...p, [key]: e.target.value }))}
                      />
                    </label>
                  ))}
                  <p className="text-xs text-muted-foreground">
                    Panel selection: {selectedLabs.join(", ") || "None selected"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <h3 className="text-lg font-medium text-foreground">Consultation Report</h3>
              </div>
              <span className="pill-badge border-primary/20 text-primary">
                Review Status: {reviewStatus}
              </span>
            </div>

            <div className="divide-y divide-border rounded-xl border border-border">
              <ReportRow label="Clinical Assessment" value={report.assessment} />
              <ReportRow label="Guideline Basis" value={report.guideline} />
              <ReportRow label="Safety Assessment" value={report.safety} />
              <ReportRow
                label="Recommended Diagnostic Evaluation"
                value={report.diagnostics.join("; ")}
              />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <PlanCard
                icon={Pill}
                title="Pharmacotherapy notes"
                items={report.prescription}
              />
              <PlanCard icon={Salad} title="Tailored nutrition plan" items={report.diet} />
              <PlanCard icon={Dumbbell} title="Activity plan" items={report.exercise} />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {(
                [
                  ["Accept", "Accepted"],
                  ["Modify", "Modified"],
                  ["Discard", "Discarded"],
                ] as const
              ).map(([label, status]) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setReviewStatus(status)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm transition-colors",
                    reviewStatus === status
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:border-primary/40"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              All medical decisions remain under physician supervision. ClinoveAI supports documentation
              and consistency; it does not replace clinical judgment.
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-secondary/30 px-5 py-4 md:px-6">
        <button
          type="button"
          disabled={step === 0}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground disabled:opacity-40"
        >
          Previous
        </button>
        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
            className="rounded-full border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setStep(0);
              setReviewStatus("Pending");
            }}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground"
          >
            Restart demonstration
          </button>
        )}
      </div>
    </div>
  );
}

function ReportRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 px-4 py-3 sm:grid-cols-[220px_1fr]">
      <p className="text-sm font-medium text-foreground">{label}</p>
      <p className="text-sm text-muted-foreground">{value}</p>
    </div>
  );
}

function PlanCard({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl border border-border p-4">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" />
        <p className="text-sm font-medium text-foreground">{title}</p>
      </div>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}
