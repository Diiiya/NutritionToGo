'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    cusFirstName: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    cusSurname: {
      type: DataTypes.STRING(60),
      allowNull: false
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
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    delivery: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    totalPrice: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },
    restaurantId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.Restaurant, {foreignKey: 'restaurantId'})
    Order.hasMany(models.OrderItem, {onDelete: 'cascade', foreignKey: 'orderId'})
  };
  return Order;
};