from flask import Blueprint, jsonify

try:
    from backend.analytics.indicators import build_prediction, build_technicals
    from backend.datasets.sample_data import MARKET_DATA, price_history
except ImportError:
    from analytics.indicators import build_prediction, build_technicals
    from datasets.sample_data import MARKET_DATA, price_history

stocks_bp = Blueprint("stocks", __name__)


@stocks_bp.get("/market/overview")
def market_overview():
    chart = price_history("AAPL")
    technicals = build_technicals(chart)
    payload = {
        **MARKET_DATA,
        "chart": build_prediction(chart),
        "technicals": technicals,
    }
    return jsonify(payload)


@stocks_bp.get("/stocks/<symbol>/history")
def stock_history(symbol):
    return jsonify({"symbol": symbol.upper(), "history": price_history(symbol.upper())})
