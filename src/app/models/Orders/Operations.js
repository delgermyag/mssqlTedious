const DocumentNumbers = require("../SaleReps/DocumentNumbers");

module.exports = (sequelize, Sequelize) => {
    const Operations = sequelize.define('Operations', {
        OperationID: {
            type: Sequelize.INTEGER,
            references: {
                model: DocumentNumbers,
                key: 'OperationID'
            }
        },
        OperationName: {
            type: Sequelize.STRING
        },
        Description: {
            type: Sequelize.STRING
        }
    });

    return Operations;
};