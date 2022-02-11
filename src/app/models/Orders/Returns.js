module.exports = (sequelize, Sequelize) => {
    const Returns = sequelize.define('Returns', {
        ReturnID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        ReturnNo: {
            type: Sequelize.INTEGER
        },
        OperationID: {
            type: Sequelize.INTEGER
        },
        SaleRepID: {
            type: Sequelize.INTEGER
        },
        StockID: {
            type: Sequelize.INTEGER
        },
        OrderID: {
            type: Sequelize.INTEGER
        },
        CreatedDate: {
            type: Sequelize.DATE
        }
    });

    return Returns;
};