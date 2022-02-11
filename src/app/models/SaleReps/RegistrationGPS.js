module.exports = (sequelize, Sequelize) => {
    const RegistrationGPS = sequelize.define('RegistrationGPS', {
        SaleRepID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'SaleReps',
                key: 'SaleRepID'
            }
        },
        Longitude: {
            type: Sequelize.STRING
        },
        Latitude: {
            type: Sequelize.STRING
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