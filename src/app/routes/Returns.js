module.exports = app => {
    const Returns = require('../controllers/Orders/Returns');
    const router = require('express').Router(); //san duudaj bga

    router.post('/createreturn', Returns.createReturn);
    router.post('/createreturndtl', Returns.createReturnDtl);
    app.use('/api/return', router);
};