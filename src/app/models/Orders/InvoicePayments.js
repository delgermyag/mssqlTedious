module.exports = (sequelize, Sequelize) => {
    const InvoicePayments = sequelize.define('InvoicePayments', {
        InvoiceID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Invoices',
                key: 'InvoiceID'
            }
        },
        PaymentDate: {
            type: Sequelize.DATE
        },
        Amount: {
            type: Sequelize.INTEGER
        }
    });

    return InvoicePayments;
};