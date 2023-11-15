'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class instituicao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  instituicao.init({
    instituicao_nome: DataTypes.STRING,
    instituicao_cnpj: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'instituicao',
  });
  return instituicao;
};