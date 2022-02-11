module.exports = (sequelize, Sequelize) => {
    const TradeshopGPS = sequelize.define('TradeshopGPS', {
        TradeshopID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Tradeshops',
                key: 'TradeshopID'
            }
        },
        Longitude: {
            type: Sequelize.STRING
        },
        Latitude: {
            type: Sequelize.STRING
        },
        CreatedDate: {
            type: Sequelize.DATE
        },
        UpdatedDate: {
            type: Sequelize.DATE
        },
        UID: {
            type: Sequelize.STRING
        }
    });

    return TradeshopGPS;
};