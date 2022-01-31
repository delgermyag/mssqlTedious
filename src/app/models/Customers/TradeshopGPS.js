const Tradeshops = require("./Tradeshops");

module.exports = (sequelize, Sequelize) => {
    const TradeshopGPS = sequelize.define('TradeshopGPS', {
        TradeshopID: {
            type: Sequelize.INTEGER,
            references: {
                model: Tradeshops,
                key: 'TradeshopID'
            }
        },
        Longitude: {
            type: Sequelize.GEOGRAPHY
        },
        Latitude: {
            type: Sequelize.GEOGRAPHY
        },
        CreatedDate: {
            type: Sequelize.DATEONLY
        },
        UpdatedDate: {
            type: Sequelize.DATEONLY
        },
        UID: {
            type: Sequelize.INTEGER
        }
    });

    return TradeshopGPS;
};