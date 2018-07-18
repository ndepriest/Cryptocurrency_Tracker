var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });
    app.get("/cryptos", function (req, res) {
        var data = ({
            "data": [
                {
                    "id": 1,
                    "name": "Bitcoin",
                    "symbol": "BTC",
                    "website_slug": "bitcoin"
                },
                {
                    "id": 2,
                    "name": "Litecoin",
                    "symbol": "LTC",
                    "website_slug": "litecoin"
                }
            ]
        });
        res.status(200).send(data);
      });
  }

  module.exports = appRouter;
