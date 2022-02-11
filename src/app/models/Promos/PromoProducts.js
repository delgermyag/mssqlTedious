module.exports = (sequelize, Sequelize) => {
    const PromoProducts = sequelize.define('PromoProducts', {
        ProductID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Products',
                key: 'ProductID'
            }
        },
        PromoID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Promos',
                key: 'PromoID'
            }
        },
        StartDate: {
            type: Sequelize.DATE
        },
        EndDate: {
            type: Sequelize.DATE
        },
        isMust: {
            type: Sequelize.BOOLEAN
        }
    });

    return PromoProducts;
};