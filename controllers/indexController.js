const Restaurant = require('../dal/restaurantDAO')
const restaurant = new Restaurant();

exports.index = async (req, res) => {

    let result = restaurant.getAll();

    await res.status(200).send(result);
}

exports.getByid = async (req, res) => {

    let result = restaurant.getById(req.params.id);

    await res.status(200).send(result);
}

exports.createOrder = async (req, res) => {

    let order = req.body;

    let result = restaurant.addOrder(order)

    await res.status(201).send({msg: 'success', created: result})
}

exports.getOrder = async (req, res) => {
    
    res.status(200).send({msg: 'ok'});
}