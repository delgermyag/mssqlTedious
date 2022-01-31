module.exports = app => {
    const Tradeshops = require('../controllers/Customers/Tradeshops');
    const router = require('express').Router();

    router.post('/', Tradeshops.create);
    router.get('/', Tradeshops.findAll);
    router.get('/:id', Tradeshops.findOne);
    router.put('/:id', Tradeshops.update);
    router.delete('/:id', Tradeshops.delete);

    app.use('/api/tradeshops', router);
}