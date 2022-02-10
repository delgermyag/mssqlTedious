module.exports = app => {
    const Tradeshops = require('../controllers/Customers/Tradeshops');
    const router = require('express').Router();

    router.get('/', Tradeshops.findAll);
    router.post('/salerep', Tradeshops.findBySalerep);

    app.use('/api/tradeshops', router);
}