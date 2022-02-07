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
            type: Sequelize.DATEONLY
        },
        EndDate: {
            type: Sequelize.DATEONLY
        },
        isMust: {
            type: Sequelize.BOOLEAN
        }
    });

    return PromoProducts;
};