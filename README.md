# StockVision Analytics

Dark stock analytics dashboard inspired by TradingView, Zerodha Kite, and Yahoo Finance.

## Features

- Live-ready market dashboard for NIFTY 50, SENSEX, AAPL, TSLA, RELIANCE, and TCS
- Historical price charts with moving average and prediction overlay
- Top gainers and losers
- RSI, MACD, trend detection, and volume analysis
- Portfolio tracker, watchlist-ready layout, market news, and AI insight panel

## Tech Stack

| Part | Technology |
| --- | --- |
| Frontend | React + Tailwind |
| Charts | Recharts |
| Backend | Flask |
| Analytics | Python analytics helpers |
| APIs | Alpha Vantage / Yahoo Finance ready |
| Deployment | Vercel frontend, Flask API service |
| Domain | dp.duttjatin.pro |

## Run Frontend

```powershell
cd frontend
npm install
npm run dev
```

Open `http://127.0.0.1:5173`.

## Run Backend

Install Python 3 first if `py --version` says `No installed Python found!`.
On Windows, install it from `https://www.python.org/downloads/` and enable `Add python.exe to PATH`.

Then run these commands in PowerShell:

```powershell
cd C:\Users\dutts\OneDrive\Desktop\projecttts\stockvision\backend
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python -m flask --app app run --debug
```

The API runs at `http://127.0.0.1:5000`.

## Architecture

```text
Frontend React Dashboard
        |
REST API Flask
        |
Stock Data APIs
        |
Analytics Engine
        |
Charts + Predictions
```

## Deploy to Vercel

This repo is configured for one Vercel project:

- React frontend builds from `frontend/`
- Flask API runs through `api/index.py`
- API routes are available at `/api/...`
- `dp.duttjatin.pro` can point to the same Vercel project

Install and log in to Vercel:

```powershell
npm install -g vercel
vercel login
```

Deploy from the project root:

```powershell
cd C:\Users\dutts\OneDrive\Desktop\projecttts\stockvision
vercel
vercel --prod
```

Add the subdomain in Vercel:

```powershell
vercel domains add dp.duttjatin.pro
vercel domains inspect dp.duttjatin.pro
```

In your domain DNS provider, add the CNAME record that Vercel shows. For a subdomain it is usually:

```text
Type: CNAME
Name: dp
Value: cname.vercel-dns-0.com
```

After DNS updates, check:

```powershell
vercel domains inspect dp.duttjatin.pro
```
