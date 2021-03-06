const { QueryTypes } = require('sequelize');
const db = require('../../models');
const Tradeshops = db.Tradeshops;

//Find all with no conditions.
exports.findAll = (req, res) => {

    Tradeshops.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(500).send({ message: err.message });
    });
};

//Exec Stored Procedure to SELECT Tradeshops using SaleRepID.
exports.findBySalerep = async (req, res) => {
    
    const id = req.body.salerepid;
    const tradeshopid = req.body.tradeshopid;
    const updatedate = req.body.lastupdatedate;

    if(id == '' || id == null) {
        res.status(404).json({ message: "Please enter SalerepID."});
        return;
    }

    if(tradeshopid == '' || tradeshopid == null) {
        res.status(404).json({ message: "Please enter TradeshopID."});
        return;
    }

    if(updatedate == '' || updatedate == null) {
        res.status(404).json({ message: "Please enter Date."});
        return;
    }

    const tradeshop = await db.sequelize.query(`exec COLA.dbo.SP_TRADESHOPS 1, '${id}', '${tradeshopid}', '${updatedate}', '' `, { type: QueryTypes.SELECT });

    try {
        if(tradeshop.length != 0) {
            res.status(200).send(tradeshop);
        } else {
            res.status(404).json({ message: 'Tradeshops not found. Check Salerep ID.'});
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};

//Exec Stored Procedure to Select Products in Tradeshops using SaleRepID.
exports.productBySalerep = async (req, res) => {
    
    const id = req.body.salerepid;

    const tradeshop = await db.sequelize.query(`exec COLA.dbo.SP_TRADESHOPS 'productinfobysalerepid', '${id}', '', '', '' `, { type: QueryTypes.SELECT });

    try {
        if(tradeshop.length != 0) {
            res.status(200).send(tradeshop);
        } else {
            res.status(404).json({ message: 'Product not found. Check Salerep ID.'});
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};

exports.vgoodelements = async (req, res) => {
    const elements = await db.sequelize.query("exec COLA.dbo.SP_TRADESHOPS 'vgoodelements','','','','' ", { type: QueryTypes.SELECT });

    try {
        if(elements.length != 0) {
            res.status(200).send(elements);
        } else {
            res.status(404).json({ message: 'Products not found'});
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};

exports.getresidues = async (req, res) => {
    const stockid = req.body.stockid;
    const article = req.body.article;

    if(stockid == '' || stockid == null) {
        res.status(404).json({ message: "Please enter StockID."});
        return;
    }
    if(article == '' || article == null) {
        res.status(404).json({ message: "Please enter article."});
        return;
    }

    const residues = await db.sequelize.query(`EXEC COLA.DBO.SP_GETDATARESIDUES 'GETDATA', '${stockid}', '${article}' `, { type: QueryTypes.SELECT });

    try {
        if(residues.length != 0) {
            res.status(200).send(residues);
        } else {
            res.status(404).json({ message: "No data to show."});
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};

exports.musthavesku = async (req, res) => {

    const salerep = req.body.salerepid;
    const tradeshop = req.body.tradeshopid;
    const date = req.body.lastupdatedate;

    const sku = await db.sequelize.query(`exec COLA.dbo.SP_TRADESHOPS 'musthavesku', '${salerep}', '${tradeshop}', '${date}', '' `, { type: QueryTypes.SELECT });

    try {
        if(sku.length != 0) {
            res.status(200).send(sku);
        } else {
            res.status(404).json({ message: 'SKU not found'});
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};

exports.rgbinfo = async (req, res) => {
    
    const rgb = await db.sequelize.query(`exec COLA.dbo.[SP_TRADESHOPS] 'rgbinfobygroupid','','','','' `, { type: QueryTypes.SELECT });

    try {
        if(rgb.length != 0) {
            res.status(200).send(rgb);
        } else {
            res.status(404).json({ message: 'RGB info not found.'});
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};

exports.gpsUpd = async (req, res) => {

    const tradeshop = req.body.tradeshopid;
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;
    
    const gps = await db.sequelize.query(`exec COLA.dbo.SP_GPS_REG_UPD 'gpsregupd', ${tradeshop}, ${longitude}, ${latitude}`, { type: QueryTypes.UPDATE });

    try {
        if(gps.length != 0) {
            res.status(200).send(gps);
        } else {
            res.status(401).json({ message: 'Unable to update tradeshop gps.'});
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};

exports.sudalgaa = async (req, res) => {

    const tradeshop = req.body.tradeshopid;

    if(tradeshop == '' || tradeshop == null) {
        res.status(404).json({ message: 'Please enter tradeshopid' });
        return;
    }

    const sudalgaa = await db.sequelize.query(`exec COLA.dbo.sp_sudalgaa 'sudalgaalist', ${tradeshop}, '', '', '', '', '', '', '', ''`, { type: QueryTypes.SELECT});

    try {
        if(sudalgaa.length != 0) {
            res.status(200).send(sudalgaa);
        } else {
            res.status(401).json({ message: 'Unable to find tradeshop'});
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };

};