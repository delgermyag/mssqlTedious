const db = require("../../model");
const Activations = db.Activations;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const name = req.body.ActivationName;
    const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Activations.findAll({ where: condition }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding Activations.'});
    });
};

exports.findOne = (req, res) => {
    const id = req.body.ActivationID;

    Activations.findByPk(id).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding the Activation.'});
    });
};