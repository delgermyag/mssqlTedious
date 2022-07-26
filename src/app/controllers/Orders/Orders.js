const { QueryTypes } = require("sequelize");
const db = require("../../models");
const Orders = db.Orders;


exports.createOrder = async (req, res) => {

    const id = req.body.orderid;
    const no = req.body.orderno;
    const paymenttermid = req.body.paymenttermid;
    const pricelisttypeid = req.body.pricelisttypeid;
    const customerid = req.body.customerid;
    const tradeshop = req.body.tradeshopid;
    const salerep = req.body.salerepid;
    const orderstatus = req.body.orderstatusid;
    const delivery = req.body.deliverymethod;
    const state = req.body.stateid;
    const warehouse = req.body.warehouseid;
    const imei = req.body.imei;
    const description = req.body.description;
    const deliverydate = req.body.deliverydate;
    const operation = req.body.operationid;
    const updatedate = req.body.updatedate;
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;

    const createOrder = await db.sequelize.query(`EXEC COLA.DBO.SP_ORDER_CREATE 'create', '${id}', '${no}', '${paymenttermid}', '${pricelisttypeid}', '${customerid}', '${tradeshop}', '${salerep}', '${orderstatus}', '${delivery}', '${state}', '${warehouse}', '${imei}', '${description}', '${deliverydate}', '${operation}', '${updatedate}', '${longitude}', '${latitude}'`, { type: QueryTypes.INSERT });

    try {
        if(createOrder.length != 0) {
            res.status(200).send(createOrder);
        } else {
            res.status(404).json({ message: "Couldn't create order. Please check your input."});
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};

exports.createOrderDetail = async(req, res) => {

       /*
    const orderno = req.body.orderno;
    const product = req.body.productid;
    const producttype = req.body.producttype;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const amount = req.body.amount;
    const baseprice = req.body.baseprice;
    const orderpromo = req.body.orderpromoid;
    */

    
    var data = req.body;

    data.forEach(async function(i) {
        await db.sequelize.query(`EXEC COLA.DBO.SP_ORDERDETAIL_CREATE 'createdetail', '${i.orderno}', ${i.productid}, '${i.producttype}', ${i.quantity}, ${i.price}, ${i.amount}, ${i.baseprice}, ${i.orderpromoid}, ''`, { type: QueryTypes.SELECT });
    }
    );
    
    const documentno = data[0].orderno;

    //const orderdetail = await db.sequelize.query(`EXEC COLA.DBO.SP_ORDERDETAIL_CREATE 'createdetail', '${orderno}', ${product}, '${producttype}', ${quantity}, ${price}, ${amount}, ${baseprice}, ${orderpromo}, ''`, { type: QueryTypes.SELECT });

    const orderdetail = await db.sequelize.query(`EXEC COLA.DBO.SP_ORDERDETAIL_CREATE 'getorderdetail', '${documentno}', '', '', '', '', '', '', '', ''`, { type: QueryTypes.SELECT }); //added by Dalai 20220707

    try {
        if(orderdetail != null) {
            res.status(200).send(orderdetail);
        } else {
            res.status(404).json({ message: "Order Detail couldn't be created. Please check your input."});
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};

exports.updateOrder = async(req, res) => {

    const orderno = req.body.orderno;

    const updateOrder = await db.sequelize.query(`EXEC COLA.DBO.SP_ORDER_UPDATE 'stateupdate', ${orderno}, '','','','','',''`, { type: QueryTypes.UPDATE });

    try {
        if(updateOrder != 0) {
            res.status(200).send(updateOrder);
        } else {
            res.status(404).json({ message: "Couldn't update order. Please check order number."});
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};

exports.getOrder = async(req, res) => {

    const salerep = req.body.salerepid;
    const deliverydate = req.body.deliverydate;
    const documentno = req.body.documentno;

    const getOrder = await db.sequelize.query(`exec COLA.dbo.SP_GETDATA_ORDER 'getdataorder', ${salerep} , '${deliverydate}' , '${documentno}' , '' `, { type: QueryTypes.SELECT });

    try {
        if(getOrder != 0) {
            res.status(200).send(getOrder);
        } else {
            res.status(404).json({ message: "Couldn't find order data." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};

exports.getOrderDetail = async(req, res) => {

    const salerep = req.body.salerepid;
    const deliverydate = req.body.deliverydate;
    const documentno = req.body.documentno;

    const getOrderDetail = await db.sequelize.query(`exec COLA.dbo.SP_GETDATA_ORDER 'getdataorderdtl', ${salerep} , '${deliverydate}' , '${documentno}' , '' `, { type: QueryTypes.SELECT });
    
    try {
        if(getOrderDetail != 0) {
            res.status(200).send(getOrderDetail);
        } else {
            res.status(404).json({ message: "Couldn't find order data." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};

exports.getInvoicePaymentData = async(req, res) => {

    const salerep = req.body.salerepid;

    const getInvoiceData = await db.sequelize.query(`EXEC COLA.DBO.SP_INVOICEPAYMENTS 'GETDATA', ${salerep},'','',''`, { type: QueryTypes.SELECT });

    try {
        if(getInvoiceData != 0) {
            res.status(200).send(getInvoiceData);
        } else {
            res.status(404).json({ message: "Couldn't find Invoice Payment data." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};

exports.getInvoiceByCondition = async(req, res) => {

    const salerep = req.body.salerepid;
    const invdate = req.body.invdate;
    const orderno = req.body.orderno;

    const invoiceCondition = await db.sequelize.query(`EXEC COLA.DBO.SP_INVOICEPAYMENTS 'getdatabycondition',${salerep},'${invdate}', '${orderno}',''`, { type: QueryTypes.SELECT });

    try {
        if(invoiceCondition != 0) {
            res.status(200).send(invoiceCondition);
        } else {
            res.status(404).json({ message: "Couldn't find Invoice Payment data." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};