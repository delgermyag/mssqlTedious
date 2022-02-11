module.exports = (sequelize, Sequelize) => {
    const SaleRepDeviceIDreq = sequelize.define('SaleRepDeviceIDreq', {
        htcode: {
            type: Sequelize.STRING,
            references: {
                model: 'SaleReps',
                key: 'SaleRepID'
            }
        },
        deviceid: {
            type: Sequelize.STRING,
            references: {
                model: 'SaleReps',
                key: 'deviceid'
            }
        },
        createdate: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.INTEGER
        },
        approvedUser: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });

    return SaleRepDeviceIDreq;
};