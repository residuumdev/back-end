'use strict';
const {
  Model
} = require('sequelize');
const db = require('./index');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      // define association here
      usuario.hasOne(db.instituicao, {
        foreignKey: 'id',
      });
    }
  }
  usuario.init({
    usuario_nome: DataTypes.STRING,
    usuario_matricula: DataTypes.INTEGER,
    usuario_senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};