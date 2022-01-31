const PaymentTerms = require("./PaymentTerms");

module.exports = (sequelize, Sequelize) => {
    const PaymentMethods = sequelize.define('PaymentMethods', {
        PaymentMethodID: {
            type: Sequelize.INTEGER,
            references: {
                model: PaymentTerms,
                key: 'PaymentMethodID'
            }
        },
        PaymenthMethodName: {
            type: Sequelize.STRING
        }
    });

    return PaymentMethods;
};