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
            type: Sequelize.INTEGER
        },
        UID: {
            type: Sequelize.STRING
        },
        CreatedDate: {
            type: Sequelize.DATE
        },
        UpdateDate: {
            type: Sequelize.DATE
        }
    });

    return PaymentTerms;
};