const Restaurant = require('../dal/restaurantDAO')
const restaurant = new Restaurant();

exports.index = async (req, res) => {

    let result = await restaurant.getAll();

    res.status(200).send(result);
}

exports.getByid = async (req, res) => {

    let result = await restaurant.getById(req.params.id);

    res.status(200).send(result);
}