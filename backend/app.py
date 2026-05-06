from flask import Flask
from flask_cors import CORS

try:
    from backend.routes.stocks import stocks_bp
except ImportError:
    from routes.stocks import stocks_bp


def create_app():
    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(stocks_bp, url_prefix="/api")

    @app.get("/health")
    def health():
        return {"status": "ok", "service": "stockvision-api"}

    return app


app = create_app()


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
