module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define('Products', {
        ProductID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        ProductGroupID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'ProductGroups',
                key: 'ProductGroupID'
            }
        },
        ProductName: {
            type: Sequelize.STRING
        },
        BarCode: {
            type: Sequelize.INTEGER
        },
        inCase: {
            type: Sequelize.STRING
        },
        isActive: {
            type: Sequelize.BOOLEAN
        },
        createdDate: {
            type: Sequelize.DATE
        }
    });

    return Products;
};