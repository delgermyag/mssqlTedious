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
            type: Sequelize.INTEGER
        },
        CreatedDate: {
            type: Sequelize.DATE
        },
        UpdatedDate: {
            type: Sequelize.DATE
        },
        UID: {
            type: Sequelize.STRING
        },
        MustHaveSKUChannelID: {
            type: Sequelize.INTEGER
        },
        channel: {
            type: Sequelize.INTEGER
        },
        BuyingPower: {
            type: Sequelize.INTEGER
        },
        Subchannel: {
            type: Sequelize.INTEGER
        },
        LocationSegment: {
            type: Sequelize.INTEGER
        },
        Image: {
            type: Sequelize.INTEGER
        }
    });

    return Tradeshops;
};