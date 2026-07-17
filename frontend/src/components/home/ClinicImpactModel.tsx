import React from "react";
import { Eyebrow } from "@/components/site/primitives";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export function ClinicImpactModel() {
  const visitsPerDay = 40;
  const workingDays = 26;
  const averageRealisation = 800;
  const encounterUplift = 0.028;
  const additionalVisits = visitsPerDay * workingDays * encounterUplift;
  const annualCapacityValue = additionalVisits * averageRealisation * 12;
  const networkAnnualValue = annualCapacityValue * 50;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <Eyebrow>Clinic economics</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl text-foreground md:text-4xl">
            Illustrative value scenario for outpatient clinics.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">
            The figures below use published ambulatory AI benchmarks—not ClinoveAI pilot results—to
            show how efficiency gains can translate into capacity and revenue when applied to a
            typical Indian outpatient practice.
          </p>
        </div>

        <div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            <Metric
              value="15–20%"
              label="lower documentation time"
              note="Published ambient-AI studies"
            />
            <Metric value="30%" label="less after-hours work" note="Published ambient-AI studies" />
            <Metric
              value="2.8%"
              label="higher encounter capacity"
              note="Published ambient-AI studies"
              accent
            />
          </div>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            <span className="font-medium text-foreground">Not ClinoveAI-validated.</span> Benchmarks
            are from documentation-focused ambient AI; ClinoveAI impact will be measured in pilot
            evaluation.
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-7">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Baseline clinic model
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              One physician · {visitsPerDay} visits/day · {workingDays} days/month ·{" "}
              {formatCurrency(averageRealisation)} average revenue/visit (illustrative)
            </p>
          </div>
          <span className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground">
            Scenario only
          </span>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <ValueCard
            value={`${Math.round(additionalVisits)}`}
            label="additional visits per month"
            detail="If recovered capacity is converted into appointments"
          />
          <ValueCard
            value={formatCurrency(annualCapacityValue)}
            label="annual capacity value per physician"
            detail="Gross potential before software and operating costs"
            accent
          />
          <ValueCard
            value={formatCurrency(networkAnnualValue)}
            label="annual value at 50 physicians"
            detail="Illustrates enterprise-scale operating leverage"
          />
        </div>

        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px]">
          <a
            href="https://doi.org/10.1001/jamanetworkopen.2025.53233"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            Financial productivity study
          </a>
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11840636/"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            Documentation efficiency study
          </a>
        </div>
      </div>
    </div>
  );
}

function Metric({
  value,
  label,
  note,
  accent = false,
}: {
  value: string;
  label: string;
  note?: string;
  accent?: boolean;
}) {
  return (
    <div className="bg-card p-4">
      <p className={`font-display text-2xl ${accent ? "text-primary" : "text-foreground"}`}>
        {value}
      </p>
      <p className="mt-1 text-xs leading-5 text-muted-foreground">{label}</p>
      {note && <p className="mt-1 text-[10px] text-muted-foreground/80">{note}</p>}
    </div>
  );
}

function ValueCard({
  value,
  label,
  detail,
  accent = false,
}: {
  value: string;
  label: string;
  detail: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-5">
      <p className={`font-display text-2xl md:text-3xl ${accent ? "text-primary" : "text-foreground"}`}>
        {value}
      </p>
      <p className="mt-2 text-sm font-medium text-foreground">{label}</p>
      <p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p>
    </div>
  );
}
