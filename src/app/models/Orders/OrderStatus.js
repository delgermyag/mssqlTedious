module.exports = (sequelize, Sequelize) => {
    const OrderStatus = sequelize.define('OrderStatus', {
        OrderStatusID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Name: {
            type: Sequelize.INTEGER
        },
        Description: {
            type: Sequelize.STRING
        }
    });

    return OrderStatus;
};