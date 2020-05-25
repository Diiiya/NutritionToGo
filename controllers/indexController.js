const Restaurant = require('../dal/restaurantDAO')
const restaurant = new Restaurant();

exports.index = async (req, res) => {

    let result = await restaurant.getAll();
    console.log(result)

    res.status(200).send(result);
}