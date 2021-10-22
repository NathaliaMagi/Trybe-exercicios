// const url = 'https://api.coincap.io/v2/assets';

// const coins = () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => data)
//     .catch((error) => error.toString);
// }
// // coins();

// // const creatLi = (coinsObject) => {
// //   const { name, symbol, supply } = coinsObject;
// //   const ul = document.querySelector('#coins-list');
// //   for (let currency in coinsObject) {
// //     const eachCoin = document.createElement('li');
// //     const object = {
// //       name,
// //       symbol,
// //       supply,
// //     }
// //    eachCoin.innerText = `${currency}: ${coinsObject[currency]}`;

// //     ul.appendChild(eachCoin);
// //   }
// // }

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

const setCoins = async () => {
  const coins = await fetchCoins();

  const coinsList = document.getElementById('coins-list');

  coins.forEach((coin) => {
    const newLi = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);

    newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

    coinsList.appendChild(newLi);
  });
}

window.onload = () => setCoins();