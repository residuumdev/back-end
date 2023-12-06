'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coleta_peso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  coleta_peso.init({
    peso_em_kg: DataTypes.FLOAT,
    tipo_residuo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'coleta_peso',
  });
  return coleta_peso;
};