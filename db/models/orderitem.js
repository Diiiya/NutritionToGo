'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    itemName: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  });
  OrderItem.associate = function(models) {
    OrderItem.belongsTo(models.Order, {foreignKey: 'orderId'})
  };
  return OrderItem;
};