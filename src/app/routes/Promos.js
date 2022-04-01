module.exports = app => {
    const products = require('../controllers/Promos/Promo');
    const router = require('express').Router();

    router.post('/', products.promos);
    router.post('/products', products.promoproducts);
    router.post('/giftproducts', products.promogiftproducts);
    router.post('/promocreate', products.promoCreate);

    app.use('/api/promo', router);
};