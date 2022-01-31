const SaleRepPlans = require("./SaleRepPlans");

module.exports =(sequelize, Sequelize) => {
    const SaleRepPlanTypes = sequelize.define('SaleRepPlanTypes', {
        PlanTypeID: {
            type: Sequelize.INTEGER,
            references: {
                model: SaleRepPlans,
                key: 'PlanTypeID'
            }
        },
        Name: {
            type: Sequelize.STRING
        },
        Description: {
            type: Sequelize.STRING
        }
    });

    return SaleRepPlanTypes;
};