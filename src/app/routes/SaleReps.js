module.exports = app => {
    const users = require('../controllers/SaleReps/SaleReps');
    const router = require('express').Router();

    router.get('/', users.findAll);
    router.get('/salerep', users.findBySaleRep);

        

    app.use('/api/salereps', router);
};