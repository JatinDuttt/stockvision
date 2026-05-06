from datetime import datetime, timedelta
from math import cos, sin


def price_history(symbol):
    bases = {
        "AAPL": 214.0,
        "TSLA": 428.0,
        "RELIANCE": 2948.0,
        "TCS": 3962.0,
    }
    base = bases.get(symbol.upper(), 220.0)
    history = []
    for index in range(42):
        close = base + index * 1.35 + sin(index / 3) * base * 0.018
        history.append(
            {
                "date": (datetime.utcnow() - timedelta(days=41 - index)).strftime("%d %b"),
                "close": round(close, 2),
                "volume": int(4_200_000 + cos(index / 2) * 900_000 + index * 65_000),
            }
        )
    return history


MARKET_DATA = {
    "indices": [
        {"symbol": "NIFTY 50", "price": 22876.40, "change": 156.25, "changePercent": 0.69},
        {"symbol": "SENSEX", "price": 75120.82, "change": -142.80, "changePercent": -0.19},
    ],
    "stocks": [
        {"symbol": "AAPL", "name": "Apple Inc.", "price": 214.16, "change": 2.41, "changePercent": 1.14, "volume": "54.2M", "sector": "Technology"},
        {"symbol": "TSLA", "name": "Tesla Inc.", "price": 428.33, "change": -7.12, "changePercent": -1.64, "volume": "82.7M", "sector": "Auto"},
        {"symbol": "RELIANCE", "name": "Reliance Industries", "price": 2948.40, "change": 31.20, "changePercent": 1.07, "volume": "9.8M", "sector": "Energy"},
        {"symbol": "TCS", "name": "Tata Consultancy Services", "price": 3962.90, "change": 18.55, "changePercent": 0.47, "volume": "2.1M", "sector": "IT"},
    ],
    "topGainers": [
        {"symbol": "AAPL", "changePercent": 1.14},
        {"symbol": "RELIANCE", "changePercent": 1.07},
        {"symbol": "TCS", "changePercent": 0.47},
    ],
    "topLosers": [
        {"symbol": "TSLA", "changePercent": -1.64},
        {"symbol": "SENSEX", "changePercent": -0.19},
    ],
    "portfolio": {
        "value": 184230,
        "dayPnl": 2140,
        "allocation": [
            {"name": "Equity", "value": 68},
            {"name": "Cash", "value": 12},
            {"name": "ETF", "value": 20},
        ],
    },
    "news": [
        "Tech shares rise as semiconductor demand outlook improves.",
        "Indian IT majors trade firm ahead of earnings guidance.",
        "Energy stocks gain after crude stabilizes near weekly highs.",
    ],
    "insight": "Momentum is constructive for AAPL and RELIANCE, while TSLA needs volume confirmation before a fresh long setup.",
    "updatedAt": datetime.utcnow().isoformat(),
}
