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
            type: Sequelize.DATEONLY
        },
        UpdatedDate: {
            type: Sequelize.DATEONLY
        },
        UID: {
            type: Sequelize.INTEGER
        }
    });
    
    return Customers;
};