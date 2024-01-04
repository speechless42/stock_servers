const { scrapeAndSaveData } = require('../services/scrapingService');

const runScrapingTask = async () => {
  try {
    console.log('Running scraping task...');
    await scrapeAndSaveData();
    console.log('Scraping task completed.');
  } catch (error) {
    console.error('Error during scraping task:', error);
    throw error;
  }
};

module.exports = { runScrapingTask };