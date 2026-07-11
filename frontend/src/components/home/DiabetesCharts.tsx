import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  PieChart,
  Pie,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";

const TEAL = "#2DD4BF";
const BLUE = "#3B82F6";
const INDIGO = "#6366F1";

const burdenData = [
  { country: "China", value: 148 },
  { country: "India", value: 89.8 },
  { country: "USA", value: 38.1 },
  { country: "Pakistan", value: 33 },
  { country: "Brazil", value: 16.8 },
];

const diagnosisData = [
  { name: "Undiagnosed", value: 57 },
  { name: "Diagnosed", value: 43 },
];

const projectionData = [
  { year: "2021", value: 74.2 },
  { year: "2024", value: 89.8 },
  { year: "2030", value: 108 },
  { year: "2045", value: 124.9 },
];

interface TipProps {
  active?: boolean;
  payload?: Array<{ value: number; name?: string; payload?: Record<string, unknown> }>;
  label?: string;
  suffix?: string;
}

const CustomTooltip: React.FC<TipProps> = ({ active, payload, label, suffix = "M" }) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="glass-strong rounded-xl px-4 py-3 text-sm">
      {label && <p className="mb-1 font-semibold text-white">{label}</p>}
      <p className="text-teal-glow">
        {payload[0].name ? `${payload[0].name}: ` : ""}
        <span className="font-display text-lg">{payload[0].value}</span>
        {suffix}
      </p>
    </div>
  );
};

const ChartShell: React.FC<{ title: string; subtitle: string; children: React.ReactNode }> = ({
  title,
  subtitle,
  children,
}) => (
  <div className="glass h-full p-6 md:p-8">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-glow">{subtitle}</p>
    <h3 className="mt-2 font-display text-2xl text-white">{title}</h3>
    <div className="mt-6 h-[240px] w-full">{children}</div>
  </div>
);

export const DiabetesBurdenChart: React.FC = () => (
  <ChartShell title="World's diabetes burden" subtitle="Top 5 countries · 2024 (millions)">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={burdenData} layout="vertical" margin={{ left: 8, right: 24 }}>
        <XAxis type="number" hide />
        <YAxis
          type="category"
          dataKey="country"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 13 }}
          width={70}
        />
        <Tooltip cursor={{ fill: "rgba(255,255,255,0.04)" }} content={<CustomTooltip />} />
        <Bar dataKey="value" radius={[0, 8, 8, 0]} animationDuration={1400}>
          {burdenData.map((entry) => (
            <Cell key={entry.country} fill={entry.country === "India" ? TEAL : "rgba(59,130,246,0.45)"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </ChartShell>
);

export const UndiagnosedChart: React.FC = () => (
  <ChartShell title="More than half undiagnosed" subtitle="Adults with diabetes in India">
    <div className="relative flex h-full items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={diagnosisData}
            dataKey="value"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={4}
            startAngle={90}
            endAngle={-270}
            animationDuration={1400}
            stroke="none"
          >
            <Cell fill={TEAL} />
            <Cell fill="rgba(255,255,255,0.08)" />
          </Pie>
          <Tooltip content={<CustomTooltip suffix="%" />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-4xl text-white">57%</span>
        <span className="text-xs uppercase tracking-widest text-white/60">undiagnosed</span>
      </div>
    </div>
  </ChartShell>
);

export const ProjectionChart: React.FC = () => (
  <ChartShell title="A widening gap" subtitle="Projected people with diabetes · India (millions)">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={projectionData} margin={{ left: -18, right: 8, top: 8 }}>
        <defs>
          <linearGradient id="projFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={INDIGO} stopOpacity={0.5} />
            <stop offset="100%" stopColor={INDIGO} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.06)" />
        <XAxis
          dataKey="year"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 12 }}
        />
        <Tooltip cursor={{ stroke: "rgba(255,255,255,0.15)" }} content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="value"
          stroke={TEAL}
          strokeWidth={2.5}
          fill="url(#projFill)"
          animationDuration={1600}
          dot={{ fill: TEAL, r: 3 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  </ChartShell>
);
