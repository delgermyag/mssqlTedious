const Products = require("../Products/Products");
const Orders = require("./Orders");

module.exports = (sequelize, Sequelize) => {
    const OrderDetails = sequelize.define('OrderDetails', {
        OrderID: {
            type: Sequelize.INTEGER,
            references: {
                model: Orders,
                key: 'OrderID'
            }
        },
        ProductID: {
            type: Sequelize.INTEGER,
            references: {
                model: Products,
                key: 'ProductID'
            }
        },
        ProductType: {
            type: Sequelize.STRING
        },
        Quantity: {
            type: Sequelize.INTEGER
        },
        OldQuantity: {
            type: Sequelize.INTEGER
        },
        Price: {
            type: Sequelize.INTEGER
        },
        Amount: {
            type: Sequelize.INTEGER
        },
        BasePrice: {
            type: Sequelize.INTEGER
        },
        OrderPromoID: {
            type: Sequelize.INTEGER
        }
    });

    return OrderDetails;
};