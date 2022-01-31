module.exports = (sequelize, Sequelize) => {
    const Pricelists = sequelize.define('PriceLists', {
        PricelistTypeID: {
            type: Sequelize.INTEGER
        },
        ProductID: {
            type: Sequelize.INTEGER
        },
        Price: {
            type: Sequelize.INTEGER
        },
        PricelistDateID: {
            type: Sequelize.INTEGER
        },
        CreatedDate: {
            type: Sequelize.DATEONLY
        }
    });

    return Pricelists;
};