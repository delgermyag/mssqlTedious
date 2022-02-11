module.exports = (sequelize, Sequelize) => {
    const Customers = sequelize.define('Customers', {
        CustomerID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        CustomerName: {
            type: Sequelize.STRING
        },
        ANName: {
            type: Sequelize.STRING
        },
        RegisterNo: {
            type: Sequelize.INTEGER
        },
        isActive: {
            type: Sequelize.BOOLEAN
        },
        CreatedDate: {
            type: Sequelize.DATE
        },
        UpdatedDate: {
            type: Sequelize.DATE
        },
        UID: {
            type: Sequelize.STRING
        }
    });
    
    return Customers;
};