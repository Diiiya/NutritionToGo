const restaurant = require('../dal/restaurantDAO');

exports.index = (req, res, next) => {

    restaurant.getAll()
    .then( restaurants => {
        res.status(200).send(restaurants)
    })
    .catch( err => {
        next(err);
    })
}

exports.getByid = (req, res, next) => {

    let restId = req.params.id;

    restaurant.getById(restId)
    .then( restaurant => {
        res.status(200).send(restaurant)
    })
    .catch( err => {
        next(err);
    })
}

exports.createOrder = async (req, res, next) => {

    let order = req.body;
    let restId = req.params.id;

        restaurant.addOrder(order, restId)
        .then( createdOrder => {
            res.status(201).send(createdOrder);
        })
        .catch( err => {
            next(err);
        })
    
}

exports.getOrderById = (req, res, next) => {

    let restId = req.params.id;
    let orderId = req.params.id2

    restaurant.getOrderById(restId, orderId)
    .then( order => {
        res.status(200).send(order);
    })
    .catch( err => {
        next(err);
    })
}