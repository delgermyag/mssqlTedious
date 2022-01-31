module.exports = app => {
    const users = require('../controllers/SaleReps/SaleReps');
    const router = require('express').Router();

    router.post('/', users.create);
    router.get('/', users.findAll);
    router.get('/:id', users.findOne);

    app.use('/api/salereps', router);
};