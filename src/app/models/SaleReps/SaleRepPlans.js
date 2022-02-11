module.exports = (sequelize, Sequelize) => {
    const SaleRepPlans = sequelize.define('SaleRepPlans', {
        PlanID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        PlanTypeID: {
            type: Sequelize.INTEGER
        },
        SaleRepID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'SaleReps',
                key: 'SaleRepID'
            }
        },
        StartDate: {
            type: Sequelize.DATE
        },
        EndDate: {
            type: Sequelize.DATE
        },
        ProductGroupID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'ProductGroups',
                key: 'ProductGroupID'
            }
        },
        ProductGroupTypeID: {
            type: Sequelize.INTEGER
        }
    });

    return SaleRepPlans;
};