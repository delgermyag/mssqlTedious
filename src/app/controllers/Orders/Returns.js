const { QueryTypes } = require("sequelize");
const db = require("../../models");

exports.createReturn = async(req, res) => {

    const returnno = req.body.returnno;
    const salerepid = req.body.salerepid;
    const tradeshopid = req.body.tradeshopid;
    const stockid = req.body.stockid;
    const documentdate = req.body.documentdate;
    const paymenttermid = req.body.paymenttermid;
    const returntypeid = req.body.returntypeid;
    const orderid = req.body.orderid;

    const createReturn = await db.sequelize.query(`exec COLA.dbo.SP_RETURN_CREATE 'return_create', N'${returnno}', ${salerepid}, ${tradeshopid}, ${stockid}, '${documentdate}', ${paymenttermid},${returntypeid},N'${orderno}','',''`, { type: QueryTypes.SELECT });

    try {
        if(createReturn != 0) {
            res.status(200).send(createReturn);
        } else {
            res.status(404).json({ message: "Couldn't insert Return." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
    
};

exports.createReturnDtl = async( req, res) => {

    var data = req.body;

    data.forEach(async function(i) {
        await db.sequelize.query(`exec COLA.dbo.SP_RETURNDETAILS_CREATE 'returndtl_create',N'${i.returnno}',  ${i.productid}, ${i.quantity}, ${i.price}, ${i.returnreasonid},'',''`, { type: QueryTypes.SELECT });
    });

    const returnno = data[0].returnno;

    const  returndetail =  await db.sequelize.query(`exec COLA.dbo.SP_RETURNDETAILS_CREATE 'returndtl_check', N'${returnno}','', '', '', '', '', ''`, { type: QueryTypes.SELECT });
    
    try {
        if(returndetail != 0) {
            //res.status(200).send(orderdetail);
            res.status(200).json({ message: "Success"});
            return;
        } else {
            res.status(404).json({ message: "Return Detail couldn't be created. Please check your input."});
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};


exports.returnType = async(req, res) => {
    const returntype = await db.sequelize.query(`exec COLA.dbo.SP_RETURN_CREATE 'returntype', N'', '','', '', '','', '', '','',N''`, { type: QueryTypes.SELECT });

    try {
        if(returntype.length != 0) {
            res.status(200).send(returntype);
        } else {
            res.status(404).json({ message: "Couldn't select ReturnTypes." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
    
};

exports.returnReason = async(req, res) => {
    const returnreason = await db.sequelize.query(`exec COLA.dbo.SP_RETURN_CREATE 'returnreason', N'', '','', '', '','', '', '','',N''`, { type: QueryTypes.SELECT });

    try {
        if(returnreason.length != 0) {
            res.status(200).send(returnreason);
        } else {
            res.status(404).json({ message: "Couldn't select ReturnReason." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
    
};
