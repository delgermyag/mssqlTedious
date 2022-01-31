module.exports = app => {
    const products = require('../controllers/Products/Products');
    const router = require('express').Router();

    router.post('/', products.create);
    router.get('/', products.findAll);
    router.get('/:id', products.findOne);

    app.use('/api/Products', router);
};