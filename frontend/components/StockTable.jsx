export default function StockTable({ stocks }) {
  return (
    <section className="rounded-lg border border-line bg-panel">
      <div className="border-b border-line px-4 py-3">
        <h2 className="text-base font-semibold">Top Stocks</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] text-left text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="px-4 py-3 font-medium">Symbol</th>
              <th className="px-4 py-3 font-medium">Company</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium">Change</th>
              <th className="px-4 py-3 font-medium">Volume</th>
              <th className="px-4 py-3 font-medium">Sector</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.symbol} className="border-t border-line/70">
                <td className="px-4 py-3 font-semibold text-white">{stock.symbol}</td>
                <td className="px-4 py-3 text-slate-300">{stock.name}</td>
                <td className="px-4 py-3 text-slate-200">{stock.price.toLocaleString()}</td>
                <td className={`px-4 py-3 font-medium ${stock.changePercent >= 0 ? "text-profit" : "text-loss"}`}>
                  {stock.changePercent >= 0 ? "+" : ""}
                  {stock.changePercent}%
                </td>
                <td className="px-4 py-3 text-slate-300">{stock.volume}</td>
                <td className="px-4 py-3 text-slate-300">{stock.sector}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
