module.exports = (sequelize, Sequelize) => {
    const Channels = sequelize.define('Channels', {
        ChannelID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        ChannelTypeID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'ChannelTypes',
                key: 'ChannelTypeID'
            }
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