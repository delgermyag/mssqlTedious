const Promo = require("./Promo");

module.exports = (sequelize, Sequelize) => {
    const PromoTypes = sequelize.define('PromoTypes', {
        PromoTypeID: {
            type: Sequelize.INTEGER,
            references: {
                model: Promo,
                key: 'PromoTypeID'
            }
        },
        Name: {
            type: Sequelize.STRING
        },
        Description: {
            type: Sequelize.STRING
        }
    });

    return PromoTypes;
};