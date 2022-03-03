const db = require("../../models");
const { QueryTypes } = require('sequelize');

exports.promos = async (req, res) => {
    const salerepid = req.body.salerepid;
    const tradeshopid = req.body.tradeshopid;
    const lastupdatedate = req.body.lastupdatedate;

    if(salerepid == '' || salerepid == null) {
        res.status(400).json({ message: "Please enter Salerep ID." });
        return;
    };
    if(tradeshopid == '' || tradeshopid == null) {
        res.status(400).json({ message: "Please enter Tradeshop ID."});
    };

    try {
        const promo = await db.sequelize.query(`exec cola.dbo.[SP_GETDATAPROMOS] 'promo', '${salerepid}', '${tradeshopid}', '${lastupdatedate}', '', ''`, { type: QueryTypes.SELECT });

        if(promo.length != 0) {
            res.status(200).send(promo);
        } else {
            res.status(404).json({ message: "There is no data to show." });
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};

exports.promogiftproducts = async(req, res) => {
    const salerepid = req.body.salerepid;
    const tradeshopid = req.body.tradeshopid;
    const lastupdatedate = req.body.lastupdatedate;

    if(salerepid == '' || salerepid == null) {
        res.status(400).json({ message: "Please enter Salerep ID." });
        return;
    };
    if(tradeshopid == '' || tradeshopid == null) {
        res.status(400).json({ message: "Please enter Tradeshop ID."});
    };

    try {
        const promo = await db.sequelize.query(`exec cola.dbo.[SP_GETDATAPROMOS] 'promogiftproducts', '${salerepid}', '${tradeshopid}', '${lastupdatedate}', '', ''`, { type: QueryTypes.SELECT });

        if(promo.length != 0) {
            res.status(200).send(promo);
        } else {
            res.status(404).json({ message: "There is no data to show." });
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};

exports.promoproducts = async(req, res) => {
    const salerepid = req.body.salerepid;
    const tradeshopid = req.body.tradeshopid;
    const lastupdatedate = req.body.lastupdatedate;

    if(salerepid == '' || salerepid == null) {
        res.status(400).json({ message: "Please enter Salerep ID." });
        return;
    };
    if(tradeshopid == '' || tradeshopid == null) {
        res.status(400).json({ message: "Please enter Tradeshop ID."});
    };

    try {
        const promo = await db.sequelize.query(`exec cola.dbo.[SP_GETDATAPROMOS] 'promoproducts', '${salerepid}', '${tradeshopid}', '${lastupdatedate}', '', ''`, { type: QueryTypes.SELECT });

        if(promo.length != 0) {
            res.status(200).send(promo);
        } else {
            res.status(404).json({ message: "There is no data to show." });
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};