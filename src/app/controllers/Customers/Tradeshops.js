const { QueryTypes } = require('sequelize');
const db = require('../../models');
const Tradeshops = db.Tradeshops;

exports.findAll = (req, res) => {

    Tradeshops.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(500).send({ message: err.message });
    });
};

exports.findBySalerep = async (req, res) => {
    
    const id = req.body.SaleRepID;

    const tradeshop = await db.sequelize.query(`exec SP_TRADESHOPS 1, ${id}, '', '', '' `, { type: QueryTypes.SELECT });

    try {
        if(tradeshop.length != 0) {
            res.status(200).send(tradeshop);
        } else {
            res.status(404).json({ message: 'Tradeshops not found. Check Salerep ID.'});
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};