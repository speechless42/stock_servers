const { Get_Daily_Details } = require('../../Services/scrapingServices/scrapingStockData');
const { RestClient } = require('@fugle/marketdata');
const currentPath = process.env
require("dotenv").config( { path: "../.env" })
const runScrapingTask = async () => {
  try {
    console.log('Running scraping task...');
    await Get_Daily_Details();
    console.log('Scraping task completed.');
  } catch (error) {
    console.error('Error during scraping task:', error);
    throw error;
  }
};

module.exports = { runScrapingTask };