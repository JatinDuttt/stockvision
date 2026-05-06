def build_technicals(history):
    closes = [point["close"] for point in history]
    volumes = [point["volume"] for point in history]
    latest = closes[-1]
    ma20 = sum(closes[-20:]) / 20
    gains = [max(closes[i] - closes[i - 1], 0) for i in range(1, len(closes))]
    losses = [max(closes[i - 1] - closes[i], 0) for i in range(1, len(closes))]
    avg_gain = sum(gains[-14:]) / 14
    avg_loss = sum(losses[-14:]) / 14 or 0.01
    rs = avg_gain / avg_loss
    rsi = 100 - (100 / (1 + rs))
    macd = (sum(closes[-12:]) / 12) - (sum(closes[-26:]) / 26)
    volume_bias = "Accumulation rising" if volumes[-1] > sum(volumes[-10:]) / 10 else "Volume cooling"

    return {
        "movingAverage": "Bullish above MA20" if latest > ma20 else "Below MA20",
        "volume": volume_bias,
        "rsi": round(rsi, 2),
        "macd": round(macd, 2),
        "trend": "Uptrend" if latest > ma20 and macd > 0 else "Sideways",
    }


def build_prediction(history):
    output = []
    recent = history[-8:]
    slope = (recent[-1]["close"] - recent[0]["close"]) / len(recent)
    for index, point in enumerate(history):
        output.append(
            {
                **point,
                "ma20": round(sum([item["close"] for item in history[max(0, index - 19): index + 1]]) / min(index + 1, 20), 2),
                "prediction": round(point["close"] + max(slope, 0.2) * 6, 2),
            }
        )
    return output
