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
            type: Sequelize.DATEONLY
        },
        CreatedDate: {
            type: Sequelize.DATEONLY
        },
        OperationID :{
            type: Sequelize.INTEGER
        },
        DeliveryManID: {
            type: Sequelize.INTEGER
        },
        UID: {
            type: Sequelize.INTEGER
        },
        Longitude: {
            type: Sequelize.GEOGRAPHY
        },
        Latitude: {
            type: Sequelize.GEOGRAPHY
        }
    });

    return Orders;
};