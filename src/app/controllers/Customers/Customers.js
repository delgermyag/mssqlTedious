const db = require("../../model");
const Customers = db.Customers;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const name = req.body.CustomerName;
    const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Customers.findAll({ where: condition }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding Customers.'});
    });
};

exports.findOne = (req, res) => {
    const id = req.body.CustomerID;
    
    Customers.findByPk(id).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding the Customer.'});
    });
};

exports.update = (req, res) => {
    const id = req.body.CustomerID;

    Customers.update(id)(req.body, {
        where: { id: id }
    }).then(num => {
        if(num == 1) {
            res.send({ message: 'Customer was updated successfully.' });
        } else {
            res.send({ message: `Can't update Customer with id=${id}.`});
        }
    }).catch(err => {
        res.status(500).send({ message: 'Error updating Customer with id=' + id });
    });
};