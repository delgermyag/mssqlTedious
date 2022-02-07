module.exports = (sequelize, Sequelize) => {
    const PromoTypes = sequelize.define('PromoTypes', {
        PromoTypeID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Name: {
            type: Sequelize.STRING
        },
        Description: {
            type: Sequelize.STRING
        }
    });

    return PromoTypes;
};