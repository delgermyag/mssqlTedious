module.exports = (sequelize, Sequelize) => {
    const PaymentTerms = sequelize.define('PaymentTerms', {
        PaymentTermID: {
            type: Sequelize.INTEGER
        },
        TradeshopID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Tradeshops',
                key: 'TradeshopID'
            }
        },
        PaymentMethodID: {
            type: Sequelize.INTEGER
        },
        PricelistTypeID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'PricelistTypes',
                key: 'PricelistTypeID'
            }
        },
        PricelistTypeOld: {
            type: Sequelize.STRING
        },
        CreditLimit: {
            type: Sequelize.INTEGER
        },
        Debt: {
            type: Sequelize.INTEGER
        },
        PercentDiscount: {
            type: Sequelize.INTEGER
        },
        isHierarchical: {
            type: Sequelize.BOOLEAN
        },
        UID: {
            type: Sequelize.INTEGER
        },
        CreatedDate: {
            type: Sequelize.DATEONLY
        },
        UpdateDate: {
            type: Sequelize.DATEONLY
        }
    });

    return PaymentTerms;
};