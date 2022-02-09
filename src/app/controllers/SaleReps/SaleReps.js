const { QueryTypes } = require('sequelize');
const db = require('../../models');
const SaleRep = db.SaleReps;

exports.findAll = (req, res) => {

    SaleRep.findAll().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding saleReps.'});
    });
};

exports.findBySaleRep = async (req, res) => {
    try {
        const id = req.body.deviceid;
        const salerep = await db.sequelize.query(`exec COLA.dbo.SP_SALEREPS 1, '', ${id}, '', '' `, { type: QueryTypes.SELECT });
        if(salerep.length != 0) {
            res.status(200).send(salerep);
        } else {
            res.status(404).json({ message: 'Salerep not found.' });
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};