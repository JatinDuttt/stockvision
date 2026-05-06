import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

export default function PriceChart({ data }) {
  return (
    <section className="rounded-lg border border-line bg-panel p-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold">Historical Price + Prediction</h2>
          <p className="text-sm text-slate-400">Close, MA20, and forecast path</p>
        </div>
        <span className="rounded border border-cyan/30 px-2 py-1 text-xs font-medium text-cyan">AAPL sample</span>
      </div>
      <div className="h-[330px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: 0, right: 12, top: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="closeFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#49c8ff" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#49c8ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#263244" strokeDasharray="3 3" />
            <XAxis dataKey="date" stroke="#94a3b8" tickLine={false} axisLine={false} minTickGap={24} />
            <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} width={44} />
            <Tooltip contentStyle={{ background: "#0d1420", border: "1px solid #263244", borderRadius: 8 }} />
            <Area type="monotone" dataKey="close" stroke="#49c8ff" fill="url(#closeFill)" strokeWidth={2} />
            <Line type="monotone" dataKey="ma20" stroke="#f5b84b" dot={false} strokeWidth={2} />
            <Line type="monotone" dataKey="prediction" stroke="#24d18f" dot={false} strokeDasharray="5 5" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
