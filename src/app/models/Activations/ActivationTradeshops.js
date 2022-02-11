module.exports = (sequelize, Sequelize) => {
    const ActivationTradeshops = sequelize.define('ActivationTradeshops', {
        ActivationID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Activations',
                key: 'ActivationID'
            }
        },
        TradeshopID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Tradeshops',
                key: 'TradeshopID'
            }
        },
        Target: {
            type: Sequelize.STRING
        },
        Actual: {
            type: Sequelize.STRING
        },
        TargetByDay: {
            type: Sequelize.DATE
        },
        ActualByDay: {
            type: Sequelize.DATE
        }
    });

    return ActivationTradeshops;
};