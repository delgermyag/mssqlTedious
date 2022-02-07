module.exports = (sequelize, Sequelize) => {
    const ActivationType = sequelize.define('ActivationType', {
        ActivationTypeID: {
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

    return ActivationType;
};