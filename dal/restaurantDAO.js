const RestaurantModel = require('../db/models').Restaurant;

module.exports = class Restaurant{
    constructor() {
    }

    getAll() {
        return RestaurantModel.findAll()
        .catch(err => {
            if (err)
            console.log(err)
        });
    }
}