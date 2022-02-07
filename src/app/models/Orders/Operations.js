module.exports = (sequelize, Sequelize) => {
    const Operations = sequelize.define('Operations', {
        OperationID: {
            type: Sequelize.INTEGER,
            primaryKey: true
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