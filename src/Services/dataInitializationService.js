require("dotenv").config( { path: "../../.env" })

const initializeData = async () => {
    try {
      // 實際的初始化邏輯...
      console.log('Data initialization completed.');

    } catch (error) {
      console.error('Error during data initialization:', error);
      throw error;
    }
  };
  module.exports = { initializeData };