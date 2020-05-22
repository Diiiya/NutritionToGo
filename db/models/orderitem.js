'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    itemName: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    orderId: DataTypes.INTEGER
  }, {});
  OrderItem.associate = function(models) {
    OrderItem.belongsTo(models.Order, {foreignKey: 'orderId'})
  };
  return OrderItem;
};