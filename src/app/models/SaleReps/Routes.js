module.exports = (sequelize, Sequelize) => {
    const Routes = sequelize.define('Routes', {
        RouteID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        SaleRepID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'SaleReps',
                key: 'SaleRepID'
            }
        },
        RouteDate: {
            type: Sequelize.INTEGER
        }
    });

    return Routes
};