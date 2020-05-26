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

    addOrder(object) { 

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
            object.OrderItems.forEach( item => {
                createdOrder.createOrderItem(item) //https://sequelize.org/master/class/lib/associations/has-many.js~HasMany.html               
            });
        })
        .catch( err => {
            console.log(err)
        })
    }
}




var orderExample = 

{
    cusFirstName: 'Boaty',
    cusSurname: 'McBoatface',
    address: 'Some Street 123',
    postalCode: 6500,
    city: 'Tortuga',
    phoneNumber: 98765432,
    delivery: false,
    totalPrice: 210.00,
    restaurantId: 1,
    OrderItems: [
        {
            itemName: 'Eatable item 1',
            quantity: 2,
            price: 20.00
        },
        {
            itemName: 'Expensive eatable item 2',
            quantity: 1,
            price: 170.00
        }
    ]
} 