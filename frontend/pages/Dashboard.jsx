import { useEffect, useMemo, useState } from "react";
import { Activity, Bell, BrainCircuit, BriefcaseBusiness, Newspaper, Search, Star } from "lucide-react";
import PriceChart from "../charts/PriceChart.jsx";
import VolumeChart from "../charts/VolumeChart.jsx";
import MetricCard from "../components/MetricCard.jsx";
import StockTable from "../components/StockTable.jsx";
import { getDashboardData } from "../services/stockApi.js";
import { mockDashboard } from "../services/stockMock.js";

export default function Dashboard() {
  const [data, setData] = useState(mockDashboard);

  useEffect(() => {
    getDashboardData().then(setData);
  }, []);

  const marketPulse = useMemo(() => {
    const gainers = data.stocks.filter((stock) => stock.changePercent >= 0).length;
    return `${gainers}/${data.stocks.length} watchlist names green`;
  }, [data.stocks]);

  return (
    <main className="market-grid min-h-screen bg-ink">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 border-b border-line pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-cyan text-ink">
                <Activity size={22} />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-white sm:text-3xl">StockVision Analytics</h1>
                <p className="text-sm text-slate-400">Live market dashboard for dp.duttjatin.pro</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex h-10 min-w-[240px] items-center gap-2 rounded-lg border border-line bg-panel px-3 text-slate-400">
              <Search size={17} />
              <input className="w-full bg-transparent text-sm text-white outline-none" placeholder="Search AAPL, TSLA, RELIANCE" />
            </label>
            <button className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-panel text-slate-300" aria-label="Alerts">
              <Bell size={18} />
            </button>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {data.indices.map((index) => (
            <MetricCard key={index.symbol} label={index.symbol} value={index.price.toLocaleString()} change={index.changePercent} tone="market" />
          ))}
          <MetricCard label="Portfolio Value" value={`₹${data.portfolio.value.toLocaleString()}`} change={1.18} tone="market" />
          <MetricCard label="Market Pulse" value={marketPulse} />
        </section>

        <section className="grid gap-5 xl:grid-cols-[1.6fr_0.9fr]">
          <PriceChart data={data.chart} />
          <div className="grid gap-5">
            <section className="rounded-lg border border-line bg-panel p-4">
              <div className="flex items-center gap-2">
                <BrainCircuit className="text-cyan" size={19} />
                <h2 className="text-base font-semibold">AI Insights</h2>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{data.insight}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-panelSoft p-3">
                  <p className="text-slate-400">RSI</p>
                  <strong className="text-xl text-white">{data.technicals.rsi}</strong>
                </div>
                <div className="rounded-lg bg-panelSoft p-3">
                  <p className="text-slate-400">MACD</p>
                  <strong className="text-xl text-white">{data.technicals.macd}</strong>
                </div>
              </div>
            </section>
            <VolumeChart data={data.chart} />
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
          <StockTable stocks={data.stocks} />
          <aside className="grid gap-5">
            <section className="rounded-lg border border-line bg-panel p-4">
              <div className="flex items-center gap-2">
                <Star className="text-amber" size={18} />
                <h2 className="text-base font-semibold">Gainers / Losers</h2>
              </div>
              <div className="mt-4 grid gap-3">
                {[...data.topGainers, ...data.topLosers].map((item) => (
                  <div key={`${item.symbol}-${item.changePercent}`} className="flex items-center justify-between rounded-lg bg-panelSoft px-3 py-2 text-sm">
                    <span className="font-medium">{item.symbol}</span>
                    <span className={item.changePercent >= 0 ? "text-profit" : "text-loss"}>
                      {item.changePercent >= 0 ? "+" : ""}
                      {item.changePercent}%
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-line bg-panel p-4">
              <div className="flex items-center gap-2">
                <Newspaper className="text-cyan" size={18} />
                <h2 className="text-base font-semibold">Market News</h2>
              </div>
              <div className="mt-4 grid gap-3 text-sm text-slate-300">
                {data.news.map((item) => (
                  <p key={item} className="border-b border-line pb-3 last:border-0 last:pb-0">{item}</p>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-line bg-panel p-4">
              <div className="flex items-center gap-2">
                <BriefcaseBusiness className="text-profit" size={18} />
                <h2 className="text-base font-semibold">Portfolio Tracker</h2>
              </div>
              <p className="mt-3 text-2xl font-semibold text-white">₹{data.portfolio.value.toLocaleString()}</p>
              <p className="text-sm text-profit">+₹{data.portfolio.dayPnl.toLocaleString()} today</p>
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}
