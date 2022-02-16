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