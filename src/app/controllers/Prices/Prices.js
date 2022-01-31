const db = require("../../model");
const Prices = db.Prices;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const pricelist = req.body.Price;
    const condition = pricelist ? { pricelist : { [Op.like]: `%${pricelist}%` } } : null;

    Prices.findAll({ where : condition }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: err.message || 'Some error occured while finding Pricelists.'});
    });
};