import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent as TooltipContentBase,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TooltipContent = TooltipContentBase as React.FC<
  React.PropsWithChildren<{ className?: string; sideOffset?: number }>
>;

export interface StatData {
  title: string;
  value: string | number;
  unit?: string;
  note?: string;
}

export interface HealthGraphData {
  label: string;
  value: number;
  color?: string;
  description?: string;
}

export interface HealthStatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  headerIcon?: React.ReactNode;
  title: string;
  subtitle?: string;
  badge?: string;
  stats: StatData[];
  graphData?: HealthGraphData[];
  graphHeight?: number;
  showLegend?: boolean;
  legendTitle?: string;
  legendFormat?: (item: HealthGraphData) => string;
}

/** Adapted from 21st.dev HealthStatCard — Valtraq clinical aesthetic. */
export const HealthStatCard = React.forwardRef<HTMLDivElement, HealthStatCardProps>(
  (
    {
      className,
      headerIcon,
      title,
      subtitle,
      badge,
      stats,
      graphData,
      graphHeight = 100,
      showLegend = true,
      legendTitle = "Evidence synthesis",
      legendFormat,
      ...props
    },
    ref
  ) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.06 },
      },
    };

    const barVariants = {
      hidden: { scaleY: 0, opacity: 0.4 },
      visible: {
        scaleY: 1,
        opacity: 1,
        transition: { type: "spring" as const, stiffness: 120, damping: 18 },
      },
    };

    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-md rounded-2xl border border-border bg-card/95 p-5 text-card-foreground backdrop-blur-sm md:p-6",
          className
        )}
        {...props}
      >
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            {headerIcon && (
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary">
                {headerIcon}
              </div>
            )}
            <div>
              <h2 className="font-display text-lg font-medium tracking-tight text-foreground">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{subtitle}</p>
              )}
            </div>
          </div>
          {badge && (
            <span className="pill-badge shrink-0 border-primary/20 text-primary">{badge}</span>
          )}
        </div>

        <div
          className={cn(
            "mb-6 grid gap-3 border-y border-border py-4",
            stats.length === 2 && "grid-cols-2",
            stats.length === 3 && "grid-cols-3",
            stats.length >= 4 && "grid-cols-2 sm:grid-cols-4"
          )}
        >
          {stats.map((item, i) => (
            <div key={i} className="text-center">
              <div className="flex items-baseline justify-center gap-1">
                <p className="font-display text-2xl font-normal text-foreground md:text-[1.65rem]">
                  {item.value}
                </p>
                {item.unit && (
                  <span className="text-xs text-muted-foreground">{item.unit}</span>
                )}
              </div>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {item.title}
              </p>
              {item.note && (
                <p className="mt-1 text-[11px] leading-4 text-primary/80">{item.note}</p>
              )}
            </div>
          ))}
        </div>

        {graphData && (
          <TooltipProvider delayDuration={80}>
            <div className="rounded-xl border border-border/80 bg-secondary/40 p-4">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                Risk & guideline domains
              </p>
              <motion.div
                className="flex w-full items-end justify-between gap-2.5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ height: graphHeight }}
              >
                {graphData.map((bar, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <motion.div
                        className="origin-bottom flex-1 cursor-pointer rounded-t-full rounded-b-md"
                        style={{
                          height: `${bar.value}%`,
                          background: `linear-gradient(180deg, ${bar.color} 0%, ${bar.color}99 100%)`,
                        }}
                        variants={barVariants}
                        whileHover={{
                          scaleY: 1.04,
                          y: -4,
                          transition: { type: "spring", stiffness: 260, damping: 18 },
                        }}
                        whileTap={{ scale: 0.98 }}
                      />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[200px] border border-border bg-card text-foreground shadow-sm">
                      <p className="font-medium">{bar.label}</p>
                      <p className="text-muted-foreground">Weight {bar.value}%</p>
                      {bar.description && (
                        <p className="mt-1 text-muted-foreground">{bar.description}</p>
                      )}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </motion.div>
            </div>
          </TooltipProvider>
        )}

        {showLegend && graphData && (
          <div className="mt-5">
            <h4 className="mb-2 text-xs font-medium text-muted-foreground">{legendTitle}</h4>
            <div className="grid grid-cols-2 gap-2">
              {graphData.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {legendFormat ? legendFormat(item) : item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

HealthStatCard.displayName = "HealthStatCard";
