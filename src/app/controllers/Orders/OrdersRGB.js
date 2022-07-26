//exec COLA.dbo.SP_ORDERRGB 'createorderrgb', @DOCUMENTNO, @ORDERNO, @STATUSID, @DESCRIPTION, '','','','',''

const { QueryTypes } = require("sequelize");
const db = require("../../models");

exports.createRGB = async(req, res) => {

    const documentno = req.body.documentno;
    const orderno = req.body.orderno;
    const statusid = req.body.statusid;
    const description = req.body.description;




    const createOrderRGB = await db.sequelize.query(`exec COLA.dbo.SP_ORDERRGB 'createorderrgb', N'${documentno}', '${orderno}', ${statusid}, N'${description}', '','','','',''`, { type: QueryTypes.SELECT });

    try {
        if(createOrderRGB != 0) {
            res.status(200).send(createOrderRGB);
        } else {
            res.status(404).json({ message: "Couldn't insert RGB." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
    
};



exports.createRGBDetail = async( req, res) => {

    
    
    /*
    req.array.forEach(element => {
        console.log(length);
    });
    */

    var data = req.body;

    data.forEach(async function(i) {
        await db.sequelize.query(`exec COLA.dbo.SP_ORDERRGB 'createorderrgbdtl',N'${i.documentno}', '', '', '', ${i.productid}, ${i.quantity}, ${i.price}, '',''`, { type: QueryTypes.SELECT });
    });

    const documentno = data[0].documentno;

    const  orderdetail =  await db.sequelize.query(`exec COLA.dbo.SP_ORDERRGB 'getorderrgbdtl', N'${documentno}','', '', '', '', '', '', '',''`, { type: QueryTypes.SELECT });

    

    try {
        if(orderdetail != 0) {
            //res.status(200).send(orderdetail);
            res.status(200).json({ message: "Success"});
            return;
        } else {
            res.status(404).json({ message: "RGB Detail couldn't be created. Please check your input."});
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};