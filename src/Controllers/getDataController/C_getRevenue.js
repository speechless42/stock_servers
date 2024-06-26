const revenueYearRanks = require("../../../models").revenueYearRanks

const getRenvenue = async () => {
    try {
      const Revenues = await revenueYearRanks.findAll();  
      return Revenues
    } catch (error) {
      console.error('Error', error);
      throw error;
    }
};
  
module.exports = { getRenvenue };