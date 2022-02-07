module.exports = (sequelize, Sequelize) => {
    const Invoices = sequelize.define('Invoices', {
        InvoiceID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        OrderID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Orders',
                key: 'OrderID'
            }
        },
        TradeshopID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Tradeshops',
                key: 'TradeshopID'
            }
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