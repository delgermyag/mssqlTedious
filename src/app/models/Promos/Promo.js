module.exports = (sequelize, Sequelize) => {
    const Promo = sequelize.define('Promo', {
        PromoID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        PromoNo: {
            type: Sequelize.INTEGER
        },
        PromoTypeID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'PromoTypes',
                key: 'PromoTypeID'
            }
        },
        Title: {
            type: Sequelize.STRING
        },
        StartDate: {
            type: Sequelize.DATEONLY
        },
        EndDate: {
            type: Sequelize.DATEONLY
        },
        TreshholdAmount: {
            type: Sequelize.INTEGER
        },
        TreshholdQuantity: {
            type: Sequelize.INTEGER
        },
        PromoPercent: {
            type: Sequelize.INTEGER
        },
        GiftQuantity: {
            type: Sequelize.INTEGER
        },
        isActive: {
            type: Sequelize.BOOLEAN
        },
        CreatedDate: {
            type: Sequelize.DATEONLY
        },
        UpdateDate: {
            type: Sequelize.DATEONLY
        },
        UID: {
            type: Sequelize.INTEGER
        }
    });

    return Promo;
};