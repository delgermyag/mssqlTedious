module.exports = (sequelize, Sequelize) => {
    const OrderPromo = sequelize.define('OrderPromo', {
        OrderPromoID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        OrderID: {
            type: Sequelize.INTEGER
        },
        Multiplicity: {
            type: Sequelize.INTEGER
        },
        CreatedDate: {
            type: Sequelize.DATE
        },
        UpdatedDate: {
            type: Sequelize.DATE
        }
    });

    return OrderPromo;
};