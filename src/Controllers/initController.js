const  initializeData  = require('../Services/dataInitializationService').initializeData;
const { runScrapingTask } = require('./scrapingController/stockDetail');
const { C_scrapingRevenue } = require('./scrapingController/scrapingRevenue')
const cron = require('node-cron');
var CronJob = require('cron').CronJob;

const initializeApp = async () => {
  try {
    // 執行初始化邏輯，例如資料庫初始化、建立初始資料等
    const fugle = await initializeData();
    
    
    
    //設定每天四點半執行一次爬取股票資訊任務
    if((await fugle.getMarketStatus()).isTradingDay == true)
    {
    cron.schedule('30 16 * * *', async () => {
      console.log('Running scrapingDetail task...');
      await runScrapingTask();
      console.log('Scraping task completed.');
    });
    
  }
    //設定每個月1,3,5,7,10日爬取營收
    cron.schedule('0 8 3,5,7,10 * *', async () => {
      console.log('Running scrapingRevenue task...');
      await C_scrapingRevenue()
      console.log('Scraping task completed.');
    });
    console.log('Application initialized successfully.');
  } catch (error) {
    console.error('Error during application initialization:', error);
    throw error;
  }
};


module.exports = { initializeApp };