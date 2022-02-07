module.exports = (sequelize, Sequelize) => {
    const TradeshopChannels = sequelize.define('TradeshopChannels', {
        ChannelID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Channels',
                key: 'ChannelID'
            }
        },
        TradeshopID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Tradeshops',
                key: 'TradeshopID'
            }
        }
    });

    return TradeshopChannels;
};