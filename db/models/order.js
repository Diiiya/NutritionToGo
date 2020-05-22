'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    cusFirstName: DataTypes.STRING,
    cusSurname: DataTypes.STRING,
    address: DataTypes.STRING,
    postalCode: DataTypes.INTEGER,
    city: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    delivery: DataTypes.BOOLEAN,
    totalPrice: DataTypes.DECIMAL,
    restaurantId: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.Restaurant, {foreignKey: 'restaurantId'})
    Order.hasMany(models.OrderItem, {foreignKey: 'orderId'})
  };
  return Order;
};