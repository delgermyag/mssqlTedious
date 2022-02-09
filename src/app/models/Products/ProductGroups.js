module.exports = (sequelize, Sequelize) => {
    const ProductGroups = sequelize.define('ProductGroups', {
        ProductGroupID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        GroupTypeID: {
            type: Sequelize.INTEGER
        },
        ParentID: {
            type: Sequelize.INTEGER
        },
        Name: {
            type: Sequelize.STRING
        },
        Position: {
            type: Sequelize.STRING
        },
        UID: {
            type: Sequelize.INTEGER
        }
    });

    return ProductGroups;
};