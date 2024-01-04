'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stock_Day_Histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      symbol: {
        type: Sequelize.STRING
      },
      open: {
        type: Sequelize.FLOAT
      },
      high: {
        type: Sequelize.FLOAT
      },
      low: {
        type: Sequelize.FLOAT
      },
      close: {
        type: Sequelize.FLOAT
      },
      volume: {
        type: Sequelize.INTEGER
      },
      _change: {
        type: Sequelize.FLOAT
      },
      date: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stock_Day_Histories');
  }
};