'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class descarte extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  descarte.init({
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    tipo_residuo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'descarte',
  });
  return descarte;
};