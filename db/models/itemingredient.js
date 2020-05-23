'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemIngredient = sequelize.define('ItemIngredient', {
    ingredientName: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
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