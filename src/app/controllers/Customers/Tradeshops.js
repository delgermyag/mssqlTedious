const db = require('../../models');
const Tradeshops = db.Tradeshops;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.TradeshopName) {
        res.send({ message: "Please enter a name."});
        return;
    };

    const tradeshop = {
        TradeshopID: req.body.TradeshopID,
        CustomerID: req.body.CustomerID,
        TradeshopName: req.body.TradeshopName,
        Address1: req.body.Address1,
        Address2: req.body.Address2,
        Phone: req.body.Phone,
        isActive: req.body.isActive,
        CreatedDate: req.body.CreatedDate,
        UpdatedDate: req.body.UpdatedDate,
        UID: req.body.uid,
        MustHaveSKUChannelID: req.body.MustHaveSKUChannelID
    };

    Tradeshops.create(tradeshop).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.findAll = (req, res) => {
    const TradeshopName = req.body.TradeshopName;
    const condition = TradeshopName ? { TradeshopName: { [Op.like]: `%${TradeshopName}%` } } : null;

    Tradeshops.findAll({ where: condition }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding Tradeshops.'});
    });
};

exports.findOne = (req, res) => {
    const TradeshopID = req.body.TradeshopID;
    const TradeshopName = req.body.TradeshopName

    Tradeshops.findByPk(TradeshopID || TradeshopName).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding the Tradeshop.'});
    });
};

exports.update = (req, res) => {
    const id = req.body.TradeshopID;

    Tradeshops.update(req.body, { where: { id: id } }).then(num => {
        if(num == 1) {
            res.send({ message: "Updated successfully."});
        } else {
            res.send({ message: `Can't update Tradeshop with id=${id}.`});
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
    const id = req.body.TradeshopID;

    Tradeshops.destroy({ where: { id: id } }).then(num => {
        if(num == 1) {
            res.send({ message: "Deleted successfully."});
        } else {
            res.send({ message: `Can't delete Tradeshop with id=${id}.`});
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};