const models = require('../db/models');
const RestaurantModel = models.Restaurant;
const MenuCategoryModel = models.MenuCategory;
const MenuItemModel = models.MenuItem;
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
            }]
        })
        .catch( err => {
            if (err) 
            console.log(err)
        });
    }

    addOrder(object, id) { 
        let order = {
            cusFirstName: object.cusFirstName,
            cusSurname: object.cusSurname,
            address: object.address,
            postalCode: object.postalCode,
            city: object.city,
            phoneNumber: object.phoneNumber,
            delivery: object.delivery,
            totalPrice: object.totalPrice,
            restaurantId: id,
            OrderItems: object.orderItems
        }
        return OrderModel.create(order, {include: [models.OrderItem]})
        .catch( err => {
            console.log(err);
        })
    }

    getOrders(id) {
        return OrderModel.findAll({
            where: {restaurantId: id}, 
            include: [models.OrderItem]
        })
        .catch( err => {
            console.log(err)
        })
    }
    
    //iza
    getOrderById(restaurantId, orderId) {
        return OrderModel.findByPk(orderId, {
            where: {restaurantId: restaurantId}, 
            include: [models.OrderItem]
        })
        .catch( err => {
            console.log(err)
        })
    }

    getCategories(id) {
        return MenuCategoryModel.findAll({where: {restaurantId: id}, include: [models.MenuItem]})
        .catch( err => {
            console.log(err)
        })
    }

    /*getMenuItems(id, cid) {
        MenuCategory.findAll({where: {restaurantId: id}, include: [models.MenuItems]})
        .then( menuCategories => {
            
        })
    }*/

} 