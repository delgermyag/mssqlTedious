const SaleReps = require("./SaleReps");

module.exports = (sequelize, Sequelize) => {
    const DocumentNumbers = sequelize.define('DocumentNumbers', {
        SaleRepID: {
            type: Sequelize.INTEGER,
            references: {
                model: SaleReps,
                key: 'SaleRepID'
            }
        },
        OperationID: {
            type: Sequelize.INTEGER
        },
        NumberPrefix: {
            type: Sequelize.INTEGER
        },
        NumberFormat: {
            type: Sequelize.STRING
        },
        CurrentNumber: {
            type: Sequelize.INTEGER
        }
    });

    return DocumentNumbers;
};