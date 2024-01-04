'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stock_Day_History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stock_Day_History.init({
    symbol: DataTypes.STRING,
    open: DataTypes.FLOAT,
    high: DataTypes.FLOAT,
    low: DataTypes.FLOAT,
    close: DataTypes.FLOAT,
    volume: DataTypes.INTEGER,
    _change: DataTypes.FLOAT,
    date: DataTypes.STRING
  }, {
    timestamps:false,
    sequelize,
    modelName: 'stock_Day_History',
  });
  return stock_Day_History;
};