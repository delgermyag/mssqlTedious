const Products = require("../Products/Products");
const Promo = require("./Promo");

module.exports = (sequelize, Sequelize) => {
    const PromoGiftProducts = sequelize.define('PromoGiftProducts', {
        ProductID: {
            type: Sequelize.INTEGER,
            references: {
                model: Products,
                key: 'ProductID'
            }
        },
        PromoID: {
            type: Sequelize.INTEGER,
            references: {
                model: Promo,
                key: 'PromoID'
            }
        },
        StartDate: {
            type: Sequelize.DATEONLY,
            references: {
                model: Promo,
                key: 'StartDate'
            }
        },
        EndDate: {
            type: Sequelize.DATEONLY,
            references: {
                model: Promo,
                key: 'EndDate'
            }
        }
    });

    return PromoGiftProducts;
};