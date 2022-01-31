const db = require('../../models');
const SaleRep = db.SaleReps;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.SaleRepName) {
        res.send({ message: "Please enter a name."});
        return;
    };

    const salerep = {
        SaleRepID: req.body.SaleRepID,
        SaleRepName: req.body.SaleRepName,
        SaleRepGroupID: req.body.SaleRepGroupID,
        ParentSaleRepID: req.body.ParentSaleRepID,
        isActive: req.body.isActive,
        UID: req.params.uid,
        CreatedDate: req.body.CreatedDate,
        Phone: req.body.Phone,
        Password: req.body.Password
    };

    SaleRep.create(salerep).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message});
    });
};

exports.findAll = (req, res) => {
    const SaleRepName = req.body.SaleRepName;
    const condition = SaleRepName ? { SaleRepName: { [Op.like]: `%${SaleRepName}%` } } : null;

    SaleRep.findAll({ where: condition }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding saleReps.'});
    });
};

exports.findOne = (req, res) => {
    const id = req.body.SaleRepID;

    SaleRep.findByPk(id || req.body.SaleRepName).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding the saleRep.'});
    });
};

exports.update = (req, res) => {
    const id = req.body.SaleRepID;

    SaleRep.update(req.body, { where: { id: id } }).then(num => {
        if(num == 1) {
            res.send({ message: "Updated successfully."});
        } else {
            res.send({ message: `Can't update SaleRep with id=${id}.`});
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
    const id = req.body.SaleRepID;

    SaleRep.destroy({ where: { id: id } }).then(num => {
        if(num == 1) {
            res.send({ message: "Deleted successfully."});
        } else {
            res.send({ message: `Can't delete SaleRep with id=${id}.`});
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};