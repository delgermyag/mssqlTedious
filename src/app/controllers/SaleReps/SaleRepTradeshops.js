const db = require('../../models');
const SaleRepTradeshops = db.SaleRepTradeShops;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.SaleRepID) {
        res.send({ message: "Please enter SalerepID" });
        return;
    };

    const salerepTradeshop = {
        SaleRepID: req.body.SaleRepID,
        TradeshopID: req.body.TradeshopID,
        ProductGroupID: req.body.ProductGroupID,
        UID: req.body.uid,
        CreatedDate: req.body.CreatedDate
    };

    SaleRepTradeshops.create(salerepTradeshop).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.findBySaleRep = (req, res) => {
    const salerep = req.params.SaleRepID;

    SaleRepTradeshops.findAll({ where: {
        SaleRepID: salerep
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};