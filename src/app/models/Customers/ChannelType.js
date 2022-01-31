const Channels = require("./Channels");

module.exports = (sequelize, Sequelize) => {
    const ChannelType = sequelize.define('ChannelType', {
        ChannelTypeID: {
            type: Sequelize.INTEGER,
            references: {
                model: Channels,
                key: 'ChannelTypeID'
            }
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