const  Get_investBank  = require('../../Services/scrapingServices/scrapingInvestBank').Get_investBank;
const invest  = require("../../calculate/Math_invest").invest
const saveinvestbank = require("../../Data/saveinvestbank").saveinvestbank
const C_scrapinginvest = async () => {
  try {
    console.log('Running scraping task...');
    const investdata = await Get_investBank();
    const calculatedata = await invest(investdata);
    await saveinvestbank(calculatedata)
    console.log('Scraping task completed.');
  } catch (error) {
    console.error('Error during scraping task:', error);
    throw error;
  }
};
module.exports = { C_scrapinginvest };