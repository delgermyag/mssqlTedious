const db = require("../../model");
const Warehouse = db.Warehouse;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const name = req.body.WarehouseName;
    const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Warehouse.findAll({ where: condition }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding Warehouses.'});
    });
};

exports.findOne = (req, res) => {
    const id = req.body.WarehouseID;
    
    Warehouse.findByPk(id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding the Warehouse.'})
    })
}