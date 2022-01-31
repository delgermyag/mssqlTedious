const db = require("../../models");
const Products = db.Products;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.ProductName) {
        res.status(400).send({ message: "Field can't be empty."});
        return;
    };

    const product = { 
        ProductID: req.body.ProductID,
        ProductGroupID: req.body.ProductGroupID,
        ProductName: req.body.ProductName,
        BarCode: req.body.BarCode,
        inCase: req.body.inCase,
        isActive: req.body.isActive,
        createdDate: req.body.createdDate
    };

    Products.create(product).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || "Error occured while creating Product."});
    });
};

exports.findAll = (req, res) => {
    const name = req.body.ProductName;
    const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Products.findAll({ where: condition }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding Products.'});
    });
};

exports.findOne = (req, res) => {
    const id = req.body.ProductID;

    Products.findByPk(id).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding the Product.'});
    });
};