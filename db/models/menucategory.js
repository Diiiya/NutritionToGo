'use strict';
module.exports = (sequelize, DataTypes) => {
  const MenuCategory = sequelize.define('MenuCategory', {
    categoryName: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    restaurantId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  MenuCategory.associate = function(models) {
    MenuCategory.belongsTo(models.Restaurant, {foreignKey: 'restaurantId'})
    MenuCategory.hasMany(models.MenuItem, {onDelete: 'cascade', foreignKey: 'categoryId'})
  };
  return MenuCategory;
};