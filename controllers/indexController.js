const Restaurant = require('../dal/restaurantDAO')
const restaurant = new Restaurant();

exports.index = (req, res, next) => {

    restaurant.getAll()
    .then( restaurants => {
        res.status(200).send(restaurants)
    })
    .catch( err => {
        res.status(500).send(err);
        next(err);
    })
}

exports.getByid = (req, res) => {

    let restId = req.params.id;

    restaurant.getById(restId)
    .then( restaurant => {
        res.status(200).send(restaurant)
    })
    .catch( err => {
        res.status(500).send(err);
        next(err);
    })
}

exports.createOrder = async (req, res, next) => {

    let order = req.body;
    let restId = req.params.id;

    try{

        let result = restaurant.addOrder(order, restId);
        await res.status(201).send({status: 'Success', message: 'Successfully created an order'})

    } catch(err){

        res.status(500).send({status: 'Failed', message: 'Something went wrong. Check for null values in req. body'})
        next(err)
    }
}

exports.getOrders = (req, res, next) => {

    let restId = req.params.id;

    restaurant.getOrders(restId)
    .then( orders => {
        res.status(200).send(orders);
    })
    .catch( err => {
        res.status(500).send(err);
        next(err);
    })
}

exports.getCategoriesById = (req, res, next) => {

    let restId = req.params.id

    restaurant.getAllCategories(restId)
    .then( categories => {
        res.status(200).send(categories);
    })
    .catch(err => {
        res.status(500).send(err);
        next(err);
    })
}