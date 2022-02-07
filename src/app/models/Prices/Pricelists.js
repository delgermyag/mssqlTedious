module.exports = (sequelize, Sequelize) => {
    const Pricelists = sequelize.define('Pricelists', {
        PricelistTypeID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'PricelistTypes',
                key: 'PricelistTypeID'
            }
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