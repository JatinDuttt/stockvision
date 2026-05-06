import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function VolumeChart({ data }) {
  return (
    <section className="rounded-lg border border-line bg-panel p-4">
      <h2 className="text-base font-semibold">Volume Analysis</h2>
      <div className="mt-4 h-[210px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.slice(-18)}>
            <XAxis dataKey="date" stroke="#94a3b8" tickLine={false} axisLine={false} minTickGap={18} />
            <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} hide />
            <Tooltip contentStyle={{ background: "#0d1420", border: "1px solid #263244", borderRadius: 8 }} />
            <Bar dataKey="volume" fill="#24d18f" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
