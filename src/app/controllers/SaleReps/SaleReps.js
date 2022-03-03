const { QueryTypes } = require('sequelize');
const db = require('../../models');


exports.findBySaleRep = async (req, res) => {
    const id = req.body.deviceid;

    if(id == '' || id == null) {
        res.status(404).json({ message: "Please enter SalerepID."});
        return;
    }

    try {
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

exports.idRequest = async (req, res) => {
    const id = req.body.deviceid;
    const htcode = req.body.htcode;

    if(id == '' || id == null) {
        res.status(404).json({ message: "Please enter device id."});
        return;
    }
    if(htcode == '' || htcode == null) {
        res.status(404).json({ message: "Please enter htcode."});
        return;
    }

    try {
        const salerep = await db.sequelize.query(`exec COLA.dbo.SP_SALEREPS 'deviceidreq', '', ${id}, '', ${htcode} `, { type: QueryTypes.INSERT });

        if(salerep[0]) {
            res.status(200).send(salerep);
        } else {
            res.status(404).json({ message: 'Salerep not found.' });
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};

exports.paymentTerms = async (req, res) => {
    const id = req.body.salerepid;
    const date = req.body.lastupdatedate;

    if(id == '' || id == null) {
        res.status(404).json({ message: "Please enter SalerepID."});
        return;
    }

    if(date == '' || date == null) {
        res.status(404).json({ message: "Please enter date."});
        return;
    }

    try {
        const salerep = await db.sequelize.query(`exec COLA.dbo.SP_SALEREPS 'paymenttermbysalerep', ${id}, '', ${date}, '' `, { type: QueryTypes.SELECT});

        if(salerep.length != 0) {
            res.status(200).send(salerep);
        } else {
            res.status(404).json({ message: 'No data to show.' });
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};

exports.paymentTermsData = async (req, res) => {
    const id = req.body.salerepid;
    const date = req.body.lastupdatedate;
    const tradeshop = req.body.tradeshopid;

    if(id == '' || id == null){
        res.status(404).json({ message: "Please enter SaleRepID" });
        return;
    }
    if(date == '' || date == null){
        res.status(404).json({ message: "Please enter Date" });
        return;
    }
    if(tradeshop == '' || tradeshop == null){
        res.status(404).json({ message: "Please enter TradeshopID" });
        return;
    }

    try {
        const salerep = await db.sequelize.query(`exec COLA.dbo.SP_GETDATAPAYMENTTERMS 'GETDATA', '${id}', '${tradeshop}', '${date}', '' `, { type: QueryTypes.SELECT});

        if(salerep.length != 0) {
            res.status(200).send(salerep);
        } else {
            res.status(404).json({ message: 'There is no data to show.' });
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};

exports.pricelisthierarchical = async (req, res) => {
    const salerep = req.body.salerepid;
    const pltype = req.body.pltypeid;
    const date = req.body.lastupdatedate;

    if(salerep == '' || salerep == null) {
        res.status(400).json({ message: "Please enter Salerep ID." });
        return;
    };
    if(pltype == '' || pltype == null) {
        res.status(400).json({ message: "Please enter Pricelist type ID."});
        return;
    };

    try {
        const pricelist = await db.sequelize.query(`exec COLA.dbo.SP_GETDATA_PRICELIST 'pricelisthierchical', '${salerep}', '${pltype}', '${date}', '', ''`, { type: QueryTypes.SELECT });

        if(pricelist.length != 0) {
            res.status(200).send(pricelist);
        } else {
            res.status(404).json({ message: "There is no data to show." });
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};

exports.warehouse = async (req, res) => {
    const salerep = req.body.salerepid;

    if(salerep == '' || salerep == null) {
        res.status(400).json({ message: "Please enter Salerep ID."});
        return;
    };

    try {
        const warehouse = await db.sequelize.query(`exec cola.dbo.[SP_SALEREPS] 'warehouse', '${salerep}', '', '', ''`, { type: QueryTypes.SELECT });

        if(warehouse.length != 0) {
            res.status(200).send(warehouse);
        } else {
            res.status(404).json({ message: "There is no data to show." });
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};

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