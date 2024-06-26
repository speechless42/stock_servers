const { RestClient } = require('@fugle/marketdata');
require("dotenv").config( { path: "../.env" })
const client = new RestClient({ apiKey: process.env.FUGLE_API_KEY });
const stock = client.stock;
// client.stock.historical.candles({ symbol: '0050', from: '2024-03-22', to: '2024-03-22', fields: 'open,high,low,close,volume,change' })
//   .then(data => console.log(data))

client.stock.snapshot.quotes({ market: 'TSE' })
  .then(data => console.log(data));