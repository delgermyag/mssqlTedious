module.exports = app => {
    const Tradeshops = require('../controllers/Customers/Tradeshops');
    const router = require('express').Router();

    router.get('/', Tradeshops.findAll);
    router.post('/salerep', Tradeshops.findBySalerep);
    router.post('/pricelist', Tradeshops.productBySalerep);
    router.post('/product', Tradeshops.vgoodelements);
    router.post('/residues', Tradeshops.getresidues);
    router.post('/musthavesku', Tradeshops.musthavesku);
    router.post('/rgbinfo', Tradeshops.rgbinfo);
    router.post('/gps', Tradeshops.gpsUpd);

    app.use('/api/tradeshops', router);
};