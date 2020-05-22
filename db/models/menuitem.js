'use strict';
module.exports = (sequelize, DataTypes) => {
  const MenuItem = sequelize.define('MenuItem', {
    itemName: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    categoryId: DataTypes.INTEGER
  }, {});
  MenuItem.associate = function(models) {
    MenuItem.belongsTo(models.MenuCategory, {foreignKey: 'categoryId'})
    MenuItem.belongsToMany(models.ItemIngredient, {
      through: 'ItemsIngredients',
      foreignKey: 'MenuItemsid',
      as: 'ingredient'
    })
  };
  return MenuItem;
};