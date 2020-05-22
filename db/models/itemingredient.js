'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemIngredient = sequelize.define('ItemIngredient', {
    ingredientName: DataTypes.STRING
  }, {});
  ItemIngredient.associate = function(models) {
    ItemIngredient.belongsToMany(models.MenuItem, {
      through: 'ItemsIngredients',
      foreignKey: 'ItemsIngredientsid',
      as: 'item'
    })
  };
  return ItemIngredient;
};