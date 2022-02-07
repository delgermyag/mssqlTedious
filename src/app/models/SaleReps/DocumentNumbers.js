module.exports = (sequelize, Sequelize) => {
    const DocumentNumbers = sequelize.define('DocumentNumbers', {
        SaleRepID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'SaleReps',
                key: 'SaleRepID'
            }
        },
        OperationID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Operations',
                key: 'OperationID'
            }
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