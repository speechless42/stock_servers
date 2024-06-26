'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class investbank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  investbank.init({
    date: DataTypes.STRING,
    symbol: DataTypes.STRING,
    name: DataTypes.STRING,
    volume: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'investbank',
  });
  return investbank;
};