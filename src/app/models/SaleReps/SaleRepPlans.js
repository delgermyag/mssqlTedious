const SaleRepPlanTypes = require("./SaleRepPlanTypes");
const SaleReps = require("./SaleReps");
const ProductGroups = require("../Products/ProductGroups");

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
                model: SaleReps,
                key: 'SaleRepID'
            }
        },
        StartDate: {
            type: Sequelize.DATEONLY
        },
        EndDate: {
            type: Sequelize.DATEONLY
        },
        ProductGroupID: {
            type: Sequelize.INTEGER,
            references: {
                model: ProductGroups,
                key: 'ProductGroupID'
            }
        },
        ProductGroupTypeID: {
            type: Sequelize.INTEGER,
            references: {
                model: ProductGroups,
                key: 'GroupTypeID'
            }
        }
    });

    return SaleRepPlans;
};