const coins = {
    'H': 50,
    'Q': 25,
    'D': 10,
    'N': 5,
    'P': 1,
}

module.exports = function makeExchange(currency) {
    if (currency > 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" }
    return Object.keys(coins).reduce((result, current) => {
        if (currency >= coins[current]) {
            let numberOfCoins = Math.floor(currency / coins[current]);
            currency -= numberOfCoins * coins[current];
            result[current] = numberOfCoins;
        }
        return result;
    }, {});
}