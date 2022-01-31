const OrderDetails = require("./OrderDetails");

module.exports = (sequelize, Sequelize) => {
    const OrderPromo = sequelize.define('OrderPromo', {
        OrderPromoID: {
            type: Sequelize.INTEGER,
            references: {
                model: OrderDetails,
                key: 'OrderPromoID'
            }
        },
        OrderID: {
            type: Sequelize.INTEGER
        },
        Multiplicity: {
            type: Sequelize.INTEGER
        },
        CreatedDate: {
            type: Sequelize.DATEONLY
        },
        UpdatedDate: {
            type: Sequelize.DATEONLY
        }
    });

    return OrderPromo;
};