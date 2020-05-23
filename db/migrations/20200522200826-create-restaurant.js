'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      logoRelativePath: {
        type: Sequelize.STRING
      },
      openAtHour: {
        type: Sequelize.INTEGER
      },
      closedAtHour: {
        type: Sequelize.INTEGER
      },
      deliveryPrice: {
        type: Sequelize.DECIMAL
      },
      deliveryMinimumOrderAmount: {
        type: Sequelize.INTEGER
      },
      deliveryTimeMinutes: {
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.DOUBLE
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
    return queryInterface.dropTable('Restaurants');
  }
};