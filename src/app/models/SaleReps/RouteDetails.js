module.exports = (sequelize, Sequelize) => {
    const RouteDetails = sequelize.define('RouteDetails', {
        routeID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Routes',
                key: 'RouteID'
            }
        },
        TradeshopID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Tradeshops',
                key: 'TradeshopID'
            }
        },
        Name: {
            type: Sequelize.STRING
        }
    });

    return RouteDetails;
};