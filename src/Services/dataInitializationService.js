require("dotenv").config( { path: "../../.env" })
console.log("")
const FugleTrade = require('@fugle/trade').FugleTrade;
const Order = require('@fugle/trade').Order

const initializeData = async () => {
    try {
      // 實際的初始化邏輯...
      console.log('Data initialization completed.');
      const fugle = new FugleTrade({
        configPath: "./config.simulation.ini" ,
      });
      await fugle.login()
      console.log('憑證輸入成功')
      return fugle

    } catch (error) {
      console.error('Error during data initialization:', error);
      throw error;
    }
  };
  module.exports = { initializeData };