module.exports = (sequelize, Sequelize) => {
    const Tradeshops = sequelize.define('Tradeshops', {
        TradeshopID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        CustomerID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Customers',
                key: 'CustomerID'
            }
        },
        TradeshopName: {
            type: Sequelize.STRING
        },
        Address1: {
            type: Sequelize.STRING 
        },
        Address2: {
            type: Sequelize.STRING
        },
        Phone: {
            type: Sequelize.INTEGER
        },
        isActive: {
            type: Sequelize.BOOLEAN
        },
        CreatedDate: {
            type: Sequelize.DATEONLY
        },
        UpdatedDate: {
            type: Sequelize.DATEONLY
        },
        UID: {
            type: Sequelize.INTEGER
        },
        MustHaveSKUChannelID: {
            type: Sequelize.INTEGER
        }
    });

    return Tradeshops;
};