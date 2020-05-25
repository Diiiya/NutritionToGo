'use strict';
module.exports = (sequelize, DataTypes) => {
  const MenuItem = sequelize.define('MenuItem', {
    itemName: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  });
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