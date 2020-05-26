'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Restaurants', 'id', {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
      }
    )
    .then( () => {
      return queryInterface.changeColumn('MenuCategories', 'id', {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      })
    }) 
    .then( () => {
      return queryInterface.changeColumn('MenuItems', 'id', {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      })
    })
    .then( () => {
      return queryInterface.changeColumn('ItemIngredients', 'id', {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      })
    })
    .then( () => {
      return queryInterface.changeColumn('Orders', 'id', {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      })
    })
    .then( () => {
      return queryInterface.changeColumn('OrderItems', 'id', {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      })
    }) 
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
