const  Get_Revenue  = require('../../Services/scrapingServices/scrapingRevenue').Get_Revenue;
const  Trade_ALL_Revenue = require('../../calculate/Math_Revenue').Trade_ALL_Revenue;
const SaveRevenueRanks = require('../../Data/SaveRanksii').SaveRevenueRanks
const C_scrapingRevenue = async () => {
  try {
    console.log('Running scraping task...');
    const Get_Revenues_sii = await Get_Revenue("sii");
    const Get_Revenues_otc = await Get_Revenue("otc");
    const Rank_Revenues_sii = await Trade_ALL_Revenue(Get_Revenues_sii)
    const Rank_Revenues_otc = await Trade_ALL_Revenue(Get_Revenues_otc)
    await SaveRevenueRanks(Rank_Revenues_sii)
    await SaveRevenueRanks(Rank_Revenues_otc)
    
    console.log('Scraping task completed.');
  } catch (error) {
    console.error('Error during scraping task:', error);
    throw error;
  }
};

module.exports = { C_scrapingRevenue };