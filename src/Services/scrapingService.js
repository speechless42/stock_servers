const axios = require('axios');
const cheerio = require('cheerio');
const { saveDataToDatabase } = require('../Data/databaseService');

const scrapeAndSaveData = async () => {
  try {
    const response = await axios.get('https://example.com/scrape-data');
    const $ = cheerio.load(response.data);

    // 解析網頁，獲取需要的資訊
    const scrapedData = {
      // 解析相關資料
    };

    // 將資料傳遞給 data 資料夾中的服務進行保存
    await saveDataToDatabase(scrapedData);

    return scrapedData;
  } catch (error) {
    console.error('Error scraping and saving data:', error);
    throw error;
  }
};

module.exports = { scrapeAndSaveData };