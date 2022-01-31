module.exports = (sequelize, Sequelize) => {
    const Channels = sequelize.define('Channels', {
        ChannelID: {
            type: Sequelize.INTEGER
        },
        ChannelTypeID: {
            type: Sequelize.INTEGER
        },
        ChannelName: {
            type: Sequelize.STRING
        },
        CreatedDate: {
            type: Sequelize.DATEONLY
        },
        UID: {
            type: Sequelize.INTEGER
        }
    });

    return Channels;
};