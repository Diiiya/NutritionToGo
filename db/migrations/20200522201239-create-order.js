'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cusFirstName: {
        type: Sequelize.STRING
      },
      cusSurname: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      postalCode: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.INTEGER
      },
      delivery: {
        type: Sequelize.BOOLEAN
      },
      totalPrice: {
        type: Sequelize.DECIMAL
      },
      restaurantId: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};