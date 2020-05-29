const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.index);
router.get('/:id', indexController.getByid);
router.post('/:id/order', indexController.createOrder);
router.get('/:id/order/:id2', indexController.getOrderById);

module.exports = router;