const Restaurant = require('../dal/restaurantDAO')
const restaurant = new Restaurant();

exports.index = async (req, res) => {

    let result = await restaurant.getAll();

    res.status(200).send(result);
}