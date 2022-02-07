module.exports = (sequelize, Sequelize) => {
    const ChannelType = sequelize.define('ChannelType', {
        ChannelTypeID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Name: {
            type: Sequelize.STRING
        },
        UID: {
            type: Sequelize.INTEGER
        }
    });

    return ChannelType;
};