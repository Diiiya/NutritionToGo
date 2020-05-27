const models = require('../db/models');
const RestaurantModel = models.Restaurant;
const OrderModel = models.Order;
const OrderItemModel = models.OrderItem;

module.exports = class Restaurant{
    constructor() {
    }

    getAll() {
        return RestaurantModel.findAll()
        .catch( err => {
            if (err)
            console.log(err)
        });
    }

    getById(id) {
        return RestaurantModel.findByPk(id, {
            include:[{
                model: models.MenuCategory,
                include: [{
                    model: models.MenuItem,
                    include: [{
                        model: models.ItemIngredient
                    }]
                }]
            }]})
        .catch( err => {
            if (err)
            console.log(err)
        });
    }

    async addOrder(object) { 

        let order = {
            cusFirstName: object.cusFirstName,
            cusSurname: object.cusSurname,
            address: object.address,
            postalCode: object.postalCode,
            city: object.city,
            phoneNumber: object.phoneNumber,
            delivery: object.delivery,
            totalPrice: object.totalPrice,
            restaurantId: object.restaurantId
        }

        return OrderModel.create(order)
        .then( createdOrder => {
            object.orderItems.forEach( item => {
                createdOrder.createOrderItem(item) //https://sequelize.org/master/class/lib/associations/has-many.js~HasMany.html               
            });
            //OrderItemModel.bulkCreate(object.orderItems).then( result => )

        })
        .catch( err => {
            console.log(err)
        })
/*
        let orderFinal = OrderModel.create(order);

        let items = [];
        
        await object.orderItems.forEach( item => {
            items.push(orderFinal.createOrderItem(item))   //https://sequelize.org/master/class/lib/associations/has-many.js~HasMany.html   
            
        });

        let result = {
            Order: orderFinal,
            Items: items
        }

        return result;*/
    }

    findOrder(id) {
        
    }
} 