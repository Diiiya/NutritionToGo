'use strict';
module.exports = (sequelize, DataTypes) => {
  const MenuCategory = sequelize.define('MenuCategory', {
    categoryName: DataTypes.STRING,
    restaurantId: DataTypes.INTEGER
  }, {});
  MenuCategory.associate = function(models) {
    MenuCategory.belongsTo(models.Restaurant, {foreignKey: 'restaurantId'})
    MenuCategory.hasMany(models.MenuItem, {foreignKey: 'categoryId'})
  };
  return MenuCategory;
};