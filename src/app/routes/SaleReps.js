module.exports = app => {
    const users = require('../controllers/SaleReps/SaleReps');
    const userTradeshops = require('../controllers/SaleReps/SaleRepTradeshops');
    const userGroups = require('../controllers/SaleReps/SaleRepGroups');
    const router = require('express').Router();

    router.post('/', users.create);
    router.get('/', users.findAll);
    router.get('/:id', users.findOne);

    router.get('/userTradeshops', userTradeshops.findBySaleRep);
    router.post('/userTradeshops', userTradeshops.create);

    router.get('/groups', userGroups.findAll);
    router.post('/groups', userGroups.create);

    app.use('/api/salereps', router);
};