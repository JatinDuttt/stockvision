const makeHistory = (base, wave = 1) =>
  Array.from({ length: 42 }, (_, index) => {
    const drift = index * wave * 1.8;
    const cycle = Math.sin(index / 3) * base * 0.018;
    const close = Number((base + drift + cycle).toFixed(2));
    return {
      date: `D-${41 - index}`,
      close,
      volume: Math.round(4200000 + Math.cos(index / 2) * 900000 + index * 65000),
      ma20: Number((close - Math.sin(index / 4) * 12).toFixed(2)),
      prediction: Number((close + 6 + index * 0.22).toFixed(2))
    };
  });

export const mockDashboard = {
  updatedAt: new Date().toISOString(),
  indices: [
    { symbol: "NIFTY 50", price: 22876.4, change: 156.25, changePercent: 0.69 },
    { symbol: "SENSEX", price: 75120.82, change: -142.8, changePercent: -0.19 }
  ],
  stocks: [
    { symbol: "AAPL", name: "Apple Inc.", price: 214.16, change: 2.41, changePercent: 1.14, volume: "54.2M", sector: "Technology" },
    { symbol: "TSLA", name: "Tesla Inc.", price: 428.33, change: -7.12, changePercent: -1.64, volume: "82.7M", sector: "Auto" },
    { symbol: "RELIANCE", name: "Reliance Industries", price: 2948.4, change: 31.2, changePercent: 1.07, volume: "9.8M", sector: "Energy" },
    { symbol: "TCS", name: "Tata Consultancy Services", price: 3962.9, change: 18.55, changePercent: 0.47, volume: "2.1M", sector: "IT" }
  ],
  topGainers: [
    { symbol: "RELIANCE", changePercent: 1.07 },
    { symbol: "AAPL", changePercent: 1.14 },
    { symbol: "TCS", changePercent: 0.47 }
  ],
  topLosers: [
    { symbol: "TSLA", changePercent: -1.64 },
    { symbol: "SENSEX", changePercent: -0.19 }
  ],
  chart: makeHistory(214, 0.36),
  technicals: {
    movingAverage: "Bullish above MA20",
    volume: "Accumulation rising",
    rsi: 58.7,
    macd: 1.42,
    trend: "Uptrend"
  },
  portfolio: {
    value: 184230,
    dayPnl: 2140,
    allocation: [
      { name: "Equity", value: 68 },
      { name: "Cash", value: 12 },
      { name: "ETF", value: 20 }
    ]
  },
  news: [
    "Tech shares rise as semiconductor demand outlook improves.",
    "Indian IT majors trade firm ahead of earnings guidance.",
    "Energy stocks gain after crude stabilizes near weekly highs."
  ],
  insight: "Momentum is constructive for AAPL and RELIANCE, while TSLA needs volume confirmation before a fresh long setup."
};
