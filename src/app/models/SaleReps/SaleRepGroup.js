module.exports = ( sequelize, Sequelize) => {
    const SaleRepGroup = sequelize.define('SaleRepGroup', {
        SaleRepGroupID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        SaleRepGroupName: {
            type: Sequelize.STRING
        }
    });

    return SaleRepGroup;
};