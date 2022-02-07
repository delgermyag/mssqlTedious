module.exports = (sequelize, Sequelize) => {
    const MustHaveSKU = sequelize.define('MustHaveSKU', {
        MustHaveSKUChannelID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'MustHaveSKUChannels',
                key: 'MustHaveSKUChannelID'
            }
        },
        ProductID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Products',
                key: 'ProductID'
            }
        },
        Target: {
            type: Sequelize.STRING
        },
        StartDate: {
            type: Sequelize.DATEONLY
        },
        EndDate: {
            type: Sequelize.DATEONLY
        }
    });

    return MustHaveSKU;
};