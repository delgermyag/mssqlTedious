module.exports = (sequelize, Sequelize) => {
    const SaleRepPlanDetails = sequelize.define('SaleRepPlanDetails', {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        PlanID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'SaleRepPlans',
                key: 'PlanID'
            }
        },
        TradeshopID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Tradeshops',
                key: 'TradeShopID'
            }
        },
        PlannedValue: {
            type: Sequelize.INTEGER
        },
        ActualValue: {
            type: Sequelize.INTEGER
        },
        DayPlannedValue: {
            type: Sequelize.INTEGER
        },
        ActualPlannedValue: {
            type: Sequelize.INTEGER
        }
    });

    return SaleRepPlanDetails;
};