import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function MetricCard({ label, value, change, tone = "neutral" }) {
  const positive = Number(change) >= 0;
  const color = tone === "neutral" ? "text-slate-300" : positive ? "text-profit" : "text-loss";
  const Icon = positive ? ArrowUpRight : ArrowDownRight;

  return (
    <section className="rounded-lg border border-line bg-panel p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <div className="mt-3 flex items-end justify-between gap-3">
        <strong className="text-2xl font-semibold text-white">{value}</strong>
        {change !== undefined && (
          <span className={`flex items-center gap-1 text-sm font-medium ${color}`}>
            <Icon size={16} />
            {Math.abs(change)}%
          </span>
        )}
      </div>
    </section>
  );
}
