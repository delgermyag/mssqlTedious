//Connecting models to DB
//Created by: Delger
//Modified by: Delger
//Created date: 2022.01.05

const dbconfig = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    port: dbconfig.PORT,
    dialect: dbconfig.dialect,
    pool: {
        max: dbconfig.pool.max,
        min: dbconfig.pool.min,
        acquire: dbconfig.pool.acquire,
        idle: dbconfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Activations Models
db.Activations = require('./Activations/Activations')(sequelize, Sequelize);
db.ActivationProducts = require('./Activations/ActivationProducts')(sequelize, Sequelize);
db.ActivationTradeshops = require('./Activations/ActivationTradeshops')(sequelize, Sequelize);
db.ActivationType = require('./Activations/ActivationType')(sequelize, Sequelize);

//Customers Models
db.Channels = require('./Customers/Channels')(sequelize, Sequelize);
db.ChannelType = require('./Customers/ChannelType')(sequelize, Sequelize);
db.Customers = require('./Customers/Customers')(sequelize, Sequelize);
db.Tradeshops = require('./Customers/Tradeshops')(sequelize, Sequelize);
db.TradeshopChannels = require('./Customers/TradeshopChannels')(sequelize, Sequelize);
db.TradeshopGPS = require('./Customers/TradeshopGPS')(sequelize, Sequelize);

//Orders Models
db.Invoices = require('./Orders/Invoices')(sequelize, Sequelize);
db.InvoicePayments = require('./Orders/InvoicePayments')(sequelize, Sequelize);
db.Orders = require('./Orders/Orders')(sequelize, Sequelize);
db.OrderDetails = require('./Orders/OrderDetails')(sequelize, Sequelize);
db.OrderPromo = require('./Orders/OrderPromo')(sequelize, Sequelize);
db.OrderStatus = require('./Orders/OrderStatus')(sequelize, Sequelize);
db.Returns = require('./Orders/Returns')(sequelize, Sequelize);
db.ReturnDetails = require('./Orders/ReturnDetails')(sequelize, Sequelize);
db.Operations = require('./Orders/Operations')(sequelize, Sequelize);

//Prices Models
db.Pricelists = require('./Prices/Pricelists')(sequelize, Sequelize);
db.PricelistDate = require('./Prices/PricelistDate')(sequelize, Sequelize);
db.PricelistHierarchical = require('./Prices/PricelistHierarchical')(sequelize, Sequelize);
db.PricelistHistory = require('./Prices/PricelistsHistory')(sequelize, Sequelize);
db.PricelistTypes = require('./Prices/PricelistTypes')(sequelize, Sequelize);
db.PaymentMethods = require('./Prices/PaymentMethods')(sequelize, Sequelize);
db.PaymentTerms = require('./Prices/PaymentTerms')(sequelize, Sequelize);

//Product Models
db.Products = require('./Products/Products')(sequelize, Sequelize);
db.ProductGroups = require('./Products/ProductGroups')(sequelize, Sequelize);
db.MustHaveSKU = require('./Products/MustHaveSKU')(sequelize, Sequelize);
db.MustHaveSKUChannels = require('./Products/MustHaveSKUChannels')(sequelize, Sequelize);

//Promo Models
db.Promo = require('./Promos/Promo')(sequelize, Sequelize);
db.PromoGiftProducts = require('./Promos/PromoGiftProducts')(sequelize, Sequelize);
db.PromoProducts = require('./Promos/PromoProducts')(sequelize, Sequelize);
db.PromoTradeshops = require('./Promos/PromoTradeshops')(sequelize, Sequelize);
db.PromoTypes = require('./Promos/PromoTypes')(sequelize, Sequelize);

//Salerep Models
db.SaleReps = require('./SaleReps/SaleReps')(sequelize, Sequelize);
db.SaleRepTradeShops = require('./SaleReps/SaleRepTradeShops')(sequelize, Sequelize);
db.SaleRepGroup = require('./SaleReps/SaleRepGroup')(sequelize, Sequelize);
db.SaleRepPlans = require('./SaleReps/SaleRepPlans')(sequelize, Sequelize);
db.SaleRepPlanDetails = require('./SaleReps/SaleRepPlanDetails')(sequelize, Sequelize);
db.SaleRepPlanTypes = require('./SaleReps/SaleRepPlanTypes')(sequelize, Sequelize);
db.SaleRepWarehouse = require('./SaleReps/SaleRepWarehouse')(sequelize, Sequelize);
db.DocumentNumbers = require('./SaleReps/DocumentNumbers')(sequelize, Sequelize);
db.RegistrationGPS = require('./SaleReps/RegistrationGPS')(sequelize, Sequelize);

//Warehouse Models
db.Warehouse = require('./Warehouse/Warehouse')(sequelize, Sequelize);
db.WarehouseResidues = require('./Warehouse/WarehouseResidues')(sequelize, Sequelize);
db.WarehouseTypes = require('./Warehouse/WarehouseTypes')(sequelize, Sequelize);

module.exports = db;