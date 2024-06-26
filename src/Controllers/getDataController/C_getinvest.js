const investbank = require("../../../models").investbank

const getInvest = async () => {
    try {
      const investbank = await investbank.findAll();  
      return investbank
    } catch (error) {
      console.error('Error', error);
      throw error;
    }
};
  
module.exports = { getInvest };