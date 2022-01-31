const SaleReps = require("./SaleReps");

module.exports = (sequelize, Sequelize) => {
    const RegistrationGPS = sequelize.define('RegistrationGPS', {
        SaleRepID: {
            type: Sequelize.INTEGER,
            references: {
                model: SaleReps,
                key: 'SaleRepID'
            }
        },
        Longitude: {
            type: Sequelize.GEOGRAPHY
        },
        Latitude: {
            type: Sequelize.GEOGRAPHY
        },
        IMEI: {
            type: Sequelize.INTEGER
        },
        RegisteredDate: {
            type: Sequelize.INTEGER
        }
    });

    return RegistrationGPS;
};