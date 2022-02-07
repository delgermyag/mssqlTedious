const db = require('../../models');
const SaleRepGroup = db.SaleRepGroup;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.SaleRepGroupID) {
        res.send({ message: "Please enter GroupID" });
        return;
    };

    const salerepGroup = {
        SaleRepGroupID: req.body.SaleRepGroupID,
        SaleRepGroupName: req.body.SaleRepGroupName
    };

    SaleRepGroup.create(salerepGroup).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.findAll = (req, res) => {

    SaleRepGroup.findAll({ where: {
        SaleRepGroupID: req.body.SaleRepGroupID
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};