module.exports = (sequelize, Sequelize) => {
    const PaymentMethods = sequelize.define('PaymentMethods', {
        PaymentMethodID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        PaymenthMethodName: {
            type: Sequelize.STRING
        }
    });

    return PaymentMethods;
};