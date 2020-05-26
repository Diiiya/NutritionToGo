'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemIngredient = sequelize.define('ItemIngredient', {
    ingredientName: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    timestamps: false
  });
  ItemIngredient.associate = function(models) {
    ItemIngredient.belongsToMany(models.MenuItem, {
      through: 'MenuItems_ItemsIngredients',
      foreignKey: 'ItemsIngredientsid'
    })
  };
  return ItemIngredient;
};