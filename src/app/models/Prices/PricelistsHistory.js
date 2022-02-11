module.exports = (sequelize, Sequelize) => {
    const PricelistsHistory = sequelize.define('PricelistsHistory', {
        PricelistTypeID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'PricelistTypes',
                key: 'PricelistTypeID'
            }
        },
        ProductID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Products',
                key: 'ProductID'
            }
        },
        Price: {
            type: Sequelize.INTEGER
        },
        PricelistDateID :{
            type: Sequelize.INTEGER,
            references: {
                model: 'PricelistDates',
                key: 'PricelistDateID'
            }
        },
        CreatedDate: {
            type: Sequelize.DATE
        }
    });

    return PricelistsHistory;
};