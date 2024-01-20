const  initializeData  = require('../Services/dataInitializationService').initializeData;
const { runScrapingTask } = require('./scrapingController/stockDetail');
const { C_scrapingRevenue } = require('./scrapingController/scrapingRevenue')
const cron = require('node-cron');

const initializeApp = async () => {
  try {
    // 執行初始化邏輯，例如資料庫初始化、建立初始資料等
    await initializeData();
    
    const nodate = ["205","206","207","208","209","210","211","212","213","214","215","228","404","405","501","610","917","1010"]
    var today = new Date();
    
    //設定每天四點半執行一次爬取股票資訊任務
    cron.schedule('30 16 * * *', async () => {

      const nodate = ["25","26","27","28","29","210","211","212","213","214","215","228","44","45","51","610","917","1010"]
      let month = today.getMonth()+1;
      let Date = today.getDate();
      let thisdate = `${month}${Date}`
      let week = today.getDay();
      let isdo = true;
      nodate.forEach((el)=>{
        if(el == thisdate){isdo = false}
      })
      if(week == 0 || week == 6){sido = false}
      
      console.log('Running scrapingDetail task...');
      if(isdo){await runScrapingTask();console.log('Scraping StockDatatask completed.');}
    });
    
  
    //設定每個月1,3,5,7,10日爬取營收
    cron.schedule('0 0 8 3,4,5,6,7,8,7,9,10 * *', async () => {
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