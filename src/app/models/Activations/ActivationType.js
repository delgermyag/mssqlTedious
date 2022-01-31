const Activations = require("./Activations");

module.exports = (sequelize, Sequelize) => {
    const ActivationType = sequelize.define('ActivationType', {
        ActivationTypeID: {
            type: Sequelize.INTEGER,
            references: {
                model: Activations,
                key: 'ActivationTypeID'
            }
        },
        Name: {
            type: Sequelize.STRING
        },
        Description: {
            type: Sequelize.STRING
        }
    });

    return ActivationType;
};