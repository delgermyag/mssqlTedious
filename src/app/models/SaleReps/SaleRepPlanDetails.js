const SaleRepPlans = require("./SaleRepPlans");
const Tradeshops = require("../Customers/Tradeshops");

module.exports = (sequelize, Sequelize) => {
    const SaleRepPlanDetails = sequelize.define('SaleRepPlanDetails', {
        ID: {
            type: Sequelize.INTEGER
        },
        PlanID: {
            type: Sequelize.INTEGER,
            references: {
                model: SaleRepPlans,
                key: 'PlanID'
            }
        },
        TradeshopID: {
            type: Sequelize.INTEGER,
            references: {
                model: Tradeshops,
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