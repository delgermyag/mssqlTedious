module.exports = (sequelize, Sequelize) => {
    const Activations = sequelize.define('Activations', {
        ActivationID :{
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        ActivationTypeID: {
            type: Sequelize.INTEGER
        },
        ActivationName: {
            type: Sequelize.STRING
        },
        TreshholdAmount: {
            type: Sequelize.INTEGER
        },
        TreshholdQuantity: {
            type: Sequelize.INTEGER
        },
        Description: {
            type: Sequelize.STRING
        },
        StartDate: {
            type: Sequelize.DATE
        },
        EndDate: {
            type: Sequelize.DATE
        }
    });

    return Activations;
};