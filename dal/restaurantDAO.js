const models = require('../db/models');
const RestaurantModel = models.Restaurant;
const MenuCategoryModel = models.MenuCategory;
const MenuItemModel = models.MenuItem;
const OrderModel = models.Order;
const OrderItemModel = models.OrderItem;



    exports.getAll = function () {
        return RestaurantModel.findAll()
        .catch( err => {
            if (err)
            console.log(err)
        });
    }

    exports.getById = function (id) {
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

    exports.addOrder = function(object, id) { 
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

    exports.getOrders = function(id) {
        return OrderModel.findAll({
            where: {restaurantId: id}, 
            include: [models.OrderItem]
        })
        .catch( err => {
            console.log(err)
        })
    }

    exports.getCategories = function(id) {
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
