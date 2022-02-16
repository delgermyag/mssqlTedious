module.exports = app => {
    const users = require('../controllers/SaleReps/SaleReps');
    const router = require('express').Router();

    router.get('/', users.findAll);
    router.post('/salerep', users.findBySaleRep);
    router.post('/idrequest', users.idRequest);
    router.post('/paymentterms', users.paymentTerms);
    router.post('/paymenttermsdata', users.paymentTermsData);

    app.use('/api/salereps', router);
};