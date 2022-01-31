const { sequelize, Sequelize } = require("..");
const SaleReps = require("./SaleReps");

module.exports = ( sequelize, Sequelize) => {
    const SaleRepGroup = sequelize.define('SaleRepGroup', {
        SaleRepGroupID: {
            type: Sequelize.INTEGER,
            references: {
                model: SaleReps,
                key: 'SaleRepGroupID'
            }
        },
        SaleRepGroupName: {
            type: Sequelize.STRING
        }
    });

    return SaleRepGroup;
};