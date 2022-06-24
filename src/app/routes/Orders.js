module.exports = app => {
    const Orders = require('../controllers/Orders/Orders');
    const router = require('express').Router();

    router.post('/createorder', Orders.createOrder);
    router.post('/createorderdetail', Orders.createOrderDetail);
    router.post('/updateorder', Orders.updateOrder);
    router.post('/order', Orders.getOrder);
    router.post('/orderdetail', Orders.getOrderDetail);
    router.post('/invoice', Orders.getInvoicePaymentData);
    router.post('/invoicepayment', Orders.getInvoiceByCondition);

    app.use('/api/orders', router);
};