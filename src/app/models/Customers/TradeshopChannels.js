const SaleReps = require("../SaleReps/SaleReps");
const Tradeshops = require("./Tradeshops");

module.exports = (sequelize, Sequelize) => {
    const TradeshopChannels = sequelize.define('TradeshopChannels', {
        ChannelID: {
            type: Sequelize.INTEGER,
            references: {
                model: SaleReps,
                key: 'SaleRepID'
            }
        },
        TradeshopID: {
            type: Sequelize.INTEGER,
            references: {
                model: Tradeshops,
                key: 'TradeshopID'
            }
        }
    });

    return TradeshopChannels;
};