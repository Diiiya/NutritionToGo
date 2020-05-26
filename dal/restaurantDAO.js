const models = require('../db/models');
const RestaurantModel = require('../db/models').Restaurant;
const CategoryModel = require('../db/models').MenuCategory;
const ItemModel = require('../db/models').MenuItems;

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
}