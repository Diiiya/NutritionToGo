'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    logoRelativePath: DataTypes.STRING,
    openAtHour: DataTypes.INTEGER,
    closedAtHour: DataTypes.INTEGER,
    deliveryPrice: DataTypes.DECIMAL,
    deliveryMinimumOrderAmount: DataTypes.INTEGER,
    deliveryTimeMinutes: DataTypes.INTEGER,
    rating: DataTypes.DOUBLE,
    address: DataTypes.STRING,
    postalCode: DataTypes.INTEGER,
    city: DataTypes.STRING
  }, {});
  Restaurant.associate = function(models) {
    Restaurant.hasMany(models.MenuCategory, {foreignKey: 'restaurantId'})
    Restaurant.hasMany(models.Order, {foreignKey: 'restaurantId'})
  };
  return Restaurant;
};