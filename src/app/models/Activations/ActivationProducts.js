const Activations = require("./Activations");

module.exports = (sequelize, Sequelize) => {
    const ActivationProducts = sequelize.define('ActivationProducts', {
        ActivationID: {
            type: Sequelize.INTEGER,
            references: {
                model: Activations,
                key: 'ActivationID'
            }
        },
        ProductID: {
            type: Sequelize.INTEGER
        },
        ProductGroupID: {
            type: Sequelize.INTEGER
        },
        ProductGroupTypeID: {
            type: Sequelize.INTEGER
        }
    });

    return ActivationProducts;
};