


let data = {
    "1": {
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "website_slug": "bitcoin",
        "rank": 1,
        "circulating_supply": 17154725.0,
        "total_supply": 17154725.0,
        "max_supply": 21000000.0,
        "quotes": {
            "USD": {
                "price": 7373.32,
                "volume_24h": 6066780000.0,
                "market_cap": 126487276937.0,
                "percent_change_1h": 0.46,
                "percent_change_24h": 9.37,
                "percent_change_7d": 15.48
            }
        },
        "last_updated": 1531882521
    },
    "1027": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "website_slug": "ethereum",
        "rank": 2,
        "circulating_supply": 100757702.0,
        "total_supply": 100757702.0,
        "max_supply": null,
        "quotes": {
            "USD": {
                "price": 507.153,
                "volume_24h": 2350150000.0,
                "market_cap": 51099570652.0,
                "percent_change_1h": 0.78,
                "percent_change_24h": 5.75,
                "percent_change_7d": 15.84
            }
        },
        "last_updated": 1531882473
    },
}

let staticPrice = data['1']['quotes']['USD']['price']; // REMEMBER ABOUT NESTING WITHIN NESTING WITH NESTING LOL
window.onload = function() {
  document.querySelector("mrktPrice").innerHTML = staticPrice;// thinking that this is the problem
};

console.log(staticPrice);// returning undefined ---> fixed! didn't do the path correctly.

const staticMrktCap = 75798789283745;

window.onload = function() {
  document.getElementById("mrktCap").innerHTML = staticMrktCap;
};
// console.log(data['1']['total_supply']);
