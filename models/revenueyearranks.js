'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class revenueYearRanks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  revenueYearRanks.init({
    symbol: DataTypes.STRING,
    name: DataTypes.STRING,
    revenue: DataTypes.INTEGER,
    L_Mon_Compare: DataTypes.FLOAT,
    L_Year_Compare: DataTypes.FLOAT,
    Remark: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    timestamps:false,
    sequelize,
    modelName: 'revenueYearRanks',
  });
  return revenueYearRanks;
};