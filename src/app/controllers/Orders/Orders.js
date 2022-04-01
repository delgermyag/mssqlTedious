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

    try {
        for(var key in req.body){
            if(req.body.hasOwnProperty(key)) {
                    const orderdetail = await db.sequelize.query(`EXEC COLA.DBO.SP_ORDERDETAIL_CREATE 'createdetail', '${req.body.orderid}', '${req.body.productid}', '${req.body.producttype}', '${req.body.quantity}', '${req.body.price}', '${req.body.amount}', '${req.body.baseprice}', '${req.body.orderpromid}', ''`, { type: QueryTypes.RAW });
                    res.status(200).send(orderdetail);
            } else {
                res.status(404).json({ message: "Order Detail couldn't be created. Please check your input."});
                return;
            }
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