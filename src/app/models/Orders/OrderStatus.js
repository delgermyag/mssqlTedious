const Orders = require("./Orders");

module.exports = (sequelize, Sequelize) => {
    const OrderStatus = sequelize.define('OrderStatus', {
        OrderStatusID: {
            type: Sequelize.INTEGER,
            references: {
                model: Orders,
                key: 'OrderStatusID'
            }
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