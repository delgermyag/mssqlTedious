module.exports = app => {
    const Orders = require('../controllers/Orders/OrdersRGB');
    const router = require('express').Router(); //san duudaj bga

    router.post('/createorder', Orders.createRGB);
    router.post('/createorderdtl', Orders.createRGBDetail);
    app.use('/api/rgb', router);
};