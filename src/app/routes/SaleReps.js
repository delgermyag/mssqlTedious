module.exports = app => {
    const users = require('../controllers/SaleReps/SaleReps');
    const router = require('express').Router();

    router.get('/', users.findAll);
    router.post('/salerep', users.findBySaleRep);
    router.post('/idrequest', users.idRequest);

    app.use('/api/salereps', router);
};