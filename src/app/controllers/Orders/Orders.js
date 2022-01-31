const db = require("../../model");
const Orders = db.Orders;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const orderNo = req.body.OrderNo;
    const condition = orderNo ? { orderNo : { [Op.like] : `%${orderNo}%` } } : null;

    Orders.findAll({ where: condition }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding Orders.'});
    });
};

exports.findOne = (req, res) => {
    const id = req.body.OrderID;

    Orders.findByPk(id).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding the Order.'});
    });
};