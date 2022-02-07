module.exports = (sequelize, Sequelize) => {
    const ReturnDetails = sequelize.define('ReturnDetails', {
        ReturnID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Returns',
                key: 'ReturnID'
            }
        },
        ProductID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Products',
                key: 'ProductID'
            }
        },
        Quantity: {
            type: Sequelize.INTEGER
        }
    });

    return ReturnDetails;
};