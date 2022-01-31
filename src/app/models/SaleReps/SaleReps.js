module.exports = (sequelize, Sequelize) => {
    const SaleRep = sequelize.define('SaleRep', {
        SaleRepID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: true
        },
        SaleRepName: {
            type: Sequelize.STRING,
            allowNull: true
        },
        SaleRepGroupID: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        ParentSaleRepID: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
        UID: {
            type: Sequelize.STRING,
            allowNull: true
        },
        CreatedDate: {
            type: Sequelize.DATEONLY,
            allowNull: true
        },
        Phone: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        Password: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });

    return SaleRep;
};