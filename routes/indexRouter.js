const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.index);
router.get('/:id', indexController.getByid);
router.get('/:id/order', indexController.getOrders);
router.post('/:id/order', indexController.createOrder);
router.get('/:id/categories', indexController.getCategoriesById);
//router.get('/:id/categories/:cid/items', indexController.getMenuItems);

//iza
router.get('/:id/order/:id2', indexController.getOrderById);

module.exports = router;