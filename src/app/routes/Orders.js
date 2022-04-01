module.exports = app => {
    const Orders = require('../controllers/Orders/Orders');
    const router = require('express').Router();

    router.post('/createorder', Orders.createOrder);
    router.post('/createorderdetail', Orders.createOrderDetail);
    router.post('/updateorder', Orders.updateOrder);

    app.use('/api/orders', router);
};