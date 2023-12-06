'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('descartes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      telefone: {
        type: Sequelize.STRING
      },
      papel: {
        type: Sequelize.INTEGER
      },
      metal: {
        type: Sequelize.INTEGER
      },
      plastico: {
        type: Sequelize.INTEGER
      },
      vidro: {
        type: Sequelize.INTEGER
      },
      organico: {
        type: Sequelize.INTEGER
      },
      nao_reciclavel: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('descartes');
  }
};