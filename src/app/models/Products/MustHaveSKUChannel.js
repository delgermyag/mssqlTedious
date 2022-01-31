const MustHaveSKU = require("./MustHaveSKU");

module.exports = (sequelize, Sequelize) => {
    const MustHaveSKUChannel = sequelize.define('MustHaveSKUChannel', {
        MustHaveSKUChannelID: {
            type: Sequelize.INTEGER,
            references: {
                model: MustHaveSKU,
                key: 'MustHaveSKUChannelID'
            }
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

    return MustHaveSKUChannel;
};