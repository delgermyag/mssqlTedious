module.exports = (sequelize, Sequelize) => {
    const MustHaveSKUChannels = sequelize.define('MustHaveSKUChannels', {
        MustHaveSKUChannelID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Name: {
            type: Sequelize.STRING
        },
        Type: {
            type: Sequelize.STRING
        },
        isMust: {
            type: Sequelize.BOOLEAN
        }
    });

    return MustHaveSKUChannels;
};