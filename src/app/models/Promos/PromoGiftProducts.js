module.exports = (sequelize, Sequelize) => {
    const PromoGiftProducts = sequelize.define('PromoGiftProducts', {
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
        }
    });

    return PromoGiftProducts;
};