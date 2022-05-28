const btc = document.querySelector('#btc');

const data = async () => {
    const got = await axios.get(`https://api.coincap.io/v2/assets`, { params: { limit: 10 } });
    res = await got.data.data;

    let btcPrice = res[0].priceUsd;
    let ethPrice = res[1].priceUsd;
    let usdtPrice = res[2].priceUsd;
    let usdcPrice = res[3].priceUsd;
    let bnbPrice = res[4].priceUsd;
    let busdPrice = res[5].priceUsd;
    let xrpPrice = res[6].priceUsd;
    let adaPrice = res[7].priceUsd;
    let solPrice = res[8].priceUsd;
    let dogePrice = res[9].priceUsd;

    // update BTC price
    btcPrice = parseFloat(btcPrice);
    btcPrice = btcPrice.toFixed(2);
    btc.innerHTML = btcPrice;

    // update ETH price
    ethPrice = parseFloat(ethPrice);
    ethPrice = ethPrice.toFixed(2);
    eth.innerHTML = ethPrice;

    // update USDT price
    usdtPrice = parseFloat(usdtPrice);
    usdtPrice = usdtPrice.toFixed(2);
    usdt.innerHTML = usdtPrice;

    // update USDC price
    usdcPrice = parseFloat(usdcPrice);
    usdcPrice = usdcPrice.toFixed(2);
    usdc.innerHTML = usdcPrice;

    // update BNB price
    bnbPrice = parseFloat(bnbPrice);
    bnbPrice = bnbPrice.toFixed(2);
    bnb.innerHTML = bnbPrice;

    // update BUSD price
    busdPrice = parseFloat(busdPrice);
    busdPrice = busdPrice.toFixed(2);
    busd.innerHTML = busdPrice;

    // update XRP price
    xrpPrice = parseFloat(xrpPrice);
    xrpPrice = xrpPrice.toFixed(2);
    xrp.innerHTML = xrpPrice;

    // update ADA price
    adaPrice = parseFloat(adaPrice);
    adaPrice = adaPrice.toFixed(2);
    ada.innerHTML = adaPrice;

    // update SOL price
    solPrice = parseFloat(solPrice);
    solPrice = solPrice.toFixed(2);
    sol.innerHTML = solPrice;

    // update DOGE price
    dogePrice = parseFloat(dogePrice);
    dogePrice = dogePrice.toFixed(2);
    doge.innerHTML = dogePrice;
};

data();
