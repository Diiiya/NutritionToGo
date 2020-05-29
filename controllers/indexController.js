const restaurant = require('../dal/restaurantDAO');

exports.index = (req, res, next) => {

    restaurant.getAll()
    .then( restaurants => {
        res.status(200).send(restaurants)
    })
    .catch( err => {
        //res.status(500).send(err);
        next(err);
    })
}

exports.getByid = (req, res, next) => {

    let restId = req.params.id;

    restaurant.getById(restId)
    .then( restaurant => {
        //console.log(restaurant)
        res.status(200).send(restaurant)
    })
    .catch( err => {
        //res.status(500).send({err: err});
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

exports.getOrders = (req, res, next) => {

    let restId = req.params.id;

    restaurant.getOrders(restId)
    .then( orders => {
        res.status(200).send(orders);
    })
    .catch( err => {
        //res.status(500).send(err);
        next(err);
    })
}

//iza
exports.getOrderById = (req, res, next) => {

    let restId = req.params.id;
    let orderId = req.params.id2

    restaurant.getOrderById(restId, orderId)
    .then( order => {
        res.status(200).send(order);
    })
    .catch( err => {
        //res.status(500).send(err);
        next(err);
    })
}

exports.getCategoriesById = (req, res, next) => {

    let restId = req.params.id

    restaurant.getCategories(restId)
    .then( categories => {
        res.status(200).send(categories);
    })
    .catch( err => {
        //res.status(500).send(err);
        next(err);
    })
}
/*
exports.getMenuItems = (req, res, next) => {

    let restId = req.params.id
    let catId = req.params.cid

    restaurant.getMenuItems(restId, catId)
    .then( menuItems => {
        res.status(200).send(menuItems)
    })
    .catch( err => {
        next(err)
    })

}*/