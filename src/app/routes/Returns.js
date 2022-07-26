module.exports = app => {
    const Returns = require('../controllers/Orders/Returns');
    const router = require('express').Router(); //san duudaj bga

    router.post('/createreturn', Returns.createReturn);
    router.post('/createreturndtl', Returns.createReturnDtl); 
    router.post('/returntype', Returns.returnType);
    router.post('/returnreason', Returns.returnReason);  //Added by Dalai 20220726
    app.use('/api/return', router);
};

//1200061 300 tai cola 