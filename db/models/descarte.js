"use strict";
const { Model } = require("sequelize");
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
  descarte.init(
    {
      telefone: DataTypes.STRING,
      papel: DataTypes.INTEGER,
      metal: DataTypes.INTEGER,
      plastico: DataTypes.INTEGER,
      vidro: DataTypes.INTEGER,
      organico: DataTypes.INTEGER,
      nao_reciclavel: DataTypes.INTEGER,
      eletronico: DataTypes.INTEGER,
      nao_reciclavel: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "descarte",
    }
  );
  return descarte;
};
