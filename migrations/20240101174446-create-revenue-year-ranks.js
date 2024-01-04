'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('revenueYearRanks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      symbol: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      revenue: {
        type: Sequelize.INTEGER
      },
      L_Mon_Compare: {
        type: Sequelize.FLOAT
      },
      L_Year_Compare: {
        type: Sequelize.FLOAT
      },
      Remark: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('revenueYearRanks');
  }
};