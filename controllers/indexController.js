const Restaurant = require('../dal/restaurantDAO')
const restaurant = new Restaurant();

exports.index = async (req, res) => {

    let result = await restaurant.getAll();

    res.status(200).send(result);
}

exports.getByid = async (req, res) => {

    let result = restaurant.getById(req.params.id);

    await res.status(200).send(result);
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

exports.getOrder = async (req, res) => {

    let restId = req.params.id;
    let orderObj = req.body


    
    res.status(200).send({msg: 'ok'});
}