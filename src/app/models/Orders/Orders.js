module.exports = (sequelize, Sequelize) => {
    const Orders = sequelize.define('Orders', {
        OrderID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        OrderNo: {
            type: Sequelize.INTEGER
        },
        PaymentTermID: {
            type: Sequelize.INTEGER
        },
        PricelistTypeID: {
            type: Sequelize.INTEGER
        },
        CustomerID: {
            type: Sequelize.INTEGER
        },
        TradeshopID: {
            type: Sequelize.INTEGER
        },
        SaleRepID: {
            type: Sequelize.INTEGER
        },
        OrderStatusID: {
            type: Sequelize.INTEGER
        },
        DeliveryMethod: {
            type: Sequelize.STRING
        },
        StateID: {
            type: Sequelize.INTEGER
        },
        WarehouseID: {
            type: Sequelize.INTEGER
        },
        IMEI: {
            type: Sequelize.INTEGER
        },
        Description: {
            type: Sequelize.STRING
        },
        DeliveryDate: {
            type: Sequelize.DATE
        },
        CreatedDate: {
            type: Sequelize.DATE
        },
        OperationID :{
            type: Sequelize.INTEGER
        },
        DeliveryManID: {
            type: Sequelize.INTEGER
        },
        UID: {
            type: Sequelize.STRING
        },
        Longitude: {
            type: Sequelize.STRING
        },
        Latitude: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });

    return Orders;
};