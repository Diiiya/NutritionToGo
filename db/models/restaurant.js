'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    logoRelativePath: {
      type: DataTypes.STRING(255)
    },
    openAtHour: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    closedAtHour: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deliveryPrice: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false
    },
    deliveryLowerBoundary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deliveryUpperBoundary: {
      type: DataTypes.INTEGER,
    },
    deliveryTimeMinutes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT
    },
    address: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    postalCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(60),
      allowNull: false
    }
  }, {
    timestamps: false
  });
  Restaurant.associate = function(models) {
    Restaurant.hasMany(models.MenuCategory, {onDelete: 'cascade', foreignKey: 'restaurantId'})
    Restaurant.hasMany(models.Order, {onDelete: 'cascade', foreignKey: 'restaurantId'})
  };
  return Restaurant;
};