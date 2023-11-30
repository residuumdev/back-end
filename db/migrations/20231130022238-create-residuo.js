'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('residuos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      papel: {
        type: Sequelize.FLOAT
      },
      metal: {
        type: Sequelize.FLOAT
      },
      vidro: {
        type: Sequelize.FLOAT
      },
      organico: {
        type: Sequelize.FLOAT
      },
      plastico: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('residuos');
  }
};