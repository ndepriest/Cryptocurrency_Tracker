


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
          "52": {
              "id": 52,
              "name": "XRP",
              "symbol": "XRP",
              "website_slug": "ripple",
              "rank": 3,
              "circulating_supply": 39262444717.0,
              "total_supply": 99991916481.0,
              "max_supply": 100000000000.0,
              "quotes": {
                  "USD": {
                      "price": 0.513982,
                      "volume_24h": 349046000.0,
                      "market_cap": 20180189861.0,
                      "percent_change_1h": 1.05,
                      "percent_change_24h": 7.1,
                      "percent_change_7d": 14.69
                  }
              },
              "last_updated": 1531882512
          },
          "1831": {
              "id": 1831,
              "name": "Bitcoin Cash",
              "symbol": "BCH",
              "website_slug": "bitcoin-cash",
              "rank": 4,
              "circulating_supply": 17243125.0,
              "total_supply": 17243125.0,
              "max_supply": 21000000.0,
              "quotes": {
                  "USD": {
                      "price": 870.884,
                      "volume_24h": 763243000.0,
                      "market_cap": 15016761673.0,
                      "percent_change_1h": 1.27,
                      "percent_change_24h": 8.75,
                      "percent_change_7d": 25.11
                  }
              },
              "last_updated": 1531882472
          },
          "1765": {
              "id": 1765,
              "name": "EOS",
              "symbol": "EOS",
              "website_slug": "eos",
              "rank": 5,
              "circulating_supply": 896149492.0,
              "total_supply": 900000000.0,
              "max_supply": 1000000000.0,
              "quotes": {
                  "USD": {
                      "price": 9.07191,
                      "volume_24h": 893566000.0,
                      "market_cap": 8129787539.0,
                      "percent_change_1h": 2.25,
                      "percent_change_24h": 12.68,
                      "percent_change_7d": 25.86
                  }
              },
              "last_updated": 1531882471
          },
}

let cryptoAssociationObject = [{
  "name": "Bitcoin",
  "id": 1
}, {
  "name": "Ethereum",
  "id": 1027
}, {
  "name": "XRP",
  "id": 52
}, {
  "name": "Bitcoin Cash",
  "id": 1831
}, {
  "name": "EOS",
  "id": 1765
}]

for (let i = 0; i < cryptoAssociationObject.length; i++) {
  let id = cryptoAssociationObject[i].id;
  let name = cryptoAssociationObject[i].name;

  let query = 'tr#'+name+' > td.mrktPrice';
  let price = data[id]['quotes']['USD']['price'];
  let element = document.querySelector(query);
  element.innerHTML = price;
};







const staticMrktCap = 75798789283745;

/*let staticPrice = data['1']['quotes']['USD']['price']; // REMEMBER ABOUT NESTING WITHIN NESTING WITH NESTING LOL
window.onload = function() {
  document.querySelector(".mrktPrice").innerHTML = staticPrice;
  document.getElementById("mrktCap").innerHTML = staticMrktCap;
};*/

console.log(cryptoAssociationObject[2].id);




// console.log(data['1']['total_supply']);
