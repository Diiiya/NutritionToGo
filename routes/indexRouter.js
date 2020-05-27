const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.index);
router.get('/:id', indexController.getByid);
router.post('/:id/order', indexController.createOrder);

module.exports = router;