module.exports =(sequelize, Sequelize) => {
    const SaleRepPlanTypes = sequelize.define('SaleRepPlanTypes', {
        PlanTypeID: {
            type: Sequelize.INTEGER,
            primaryKey: true
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