module.exports = app => {
    const users = require('../controllers/SaleReps/SaleReps');
    const router = require('express').Router();

    router.get('/', users.findAll);
    router.post('/salerep', users.findBySaleRep);
    router.post('/idrequest', users.idRequest);
    router.post('/paymenttermsdata', users.paymentTermsData);
    router.post('/pricelist', users.pricelisthierarchical);
    router.post('/warehouse', users.warehouse);
    router.post('/promos', users.promos);
    router.post('/promogiftproducts', users.promogiftproducts);
    router.post('/promoproducts', users.promoproducts);

    app.use('/api/salereps', router);
};