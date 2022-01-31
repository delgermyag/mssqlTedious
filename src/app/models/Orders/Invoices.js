module.exports = (sequelize, Sequelize) => {
    const Invoices = sequelize.define('Invoices', {
        InvoiceID: {
            type: Sequelize.INTEGER
        },
        OrderID: {
            type: Sequelize.INTEGER
        },
        TradeshopID: {
            type: Sequelize.INTEGER
        },
        Amount: {
            type: Sequelize.INTEGER
        },
        Debt: {
            type: Sequelize.INTEGER
        },
        InvoiceDate: {
            type: Sequelize.DATEONLY
        },
        CreatedDate: {
            type: Sequelize.DATEONLY
        },
        UID: {
            type: Sequelize.INTEGER
        }
    });

    return Invoices;
};