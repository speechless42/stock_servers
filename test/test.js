const { RestClient } = require('@fugle/marketdata');
require("dotenv").config( { path: "../.env" })
const client = new RestClient({ apiKey: process.env.FUGLE_API_KEY });
const stock = client.stock;
stock.snapshot.quotes({ market: 'TSE' })
  .then(data => console.log(data));