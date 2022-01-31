const db = require("../../model");
const Promo = db.Promos;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const title = req.body.Title;
    const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Promo.findAll({ where: condition }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding Promos.'});
    });
};

exports.findOne = (req, res) => {
    const id = req.body.PromoID;
    
    Promo.findByPk(id).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding the Promo.'});
    });
};