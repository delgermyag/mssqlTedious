module.exports = (sequelize, Sequelize) => {
    const SaleRepDevice = sequelize.define('SaleRepDevice', {
        SaleRepID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'SaleReps',
                key: 'SaleRepID'
            },
            DeviceID: {
                type: Sequelize.STRING
            },
            CreatedDate: {
                type: Sequelize.DATE
            },
            UpdatedDate: {
                type: Sequelize.Date
            },
            isActive: {
                type: Sequelize.INT
            }
        }
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });

    return SaleRepDevice;
};