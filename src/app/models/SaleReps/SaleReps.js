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
            allowNull: true,
            references: {
                model: 'SaleRepGroups',
                key: 'SaleRepGroupID'
            }
        },
        ParentSaleRepID: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        isActive: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        code: {
            type: Sequelize.STRING,
            allowNull: true
        },
        UID: {
            type: Sequelize.STRING,
            allowNull: true
        },
        CreatedDate: {
            type: Sequelize.DATE,
            allowNull: true
        },
        Phone: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        Password: {
            type: Sequelize.STRING,
            allowNull: true
        },
        deviceid: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });

    return SaleRep;
};