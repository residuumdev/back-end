'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class residuo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  residuo.init({
    papel: DataTypes.FLOAT,
    metal: DataTypes.FLOAT,
    vidro: DataTypes.FLOAT,
    organico: DataTypes.FLOAT,
    plastico: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'residuo',
  });
  return residuo;
};