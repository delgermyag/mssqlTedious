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

//Customers Models
db.Channels = require('./Customers/Channels')(sequelize, Sequelize);
db.ChannelType = require('./Customers/ChannelType')(sequelize, Sequelize);
db.Customers = require('./Customers/Customers')(sequelize, Sequelize);
db.Tradeshops = require('./Customers/Tradeshops')(sequelize, Sequelize);
db.TradeshopChannels = require('./Customers/TradeshopChannels')(sequelize, Sequelize);
db.TradeshopGPS = require('./Customers/TradeshopGPS')(sequelize, Sequelize);

//Salerep Models
db.SaleReps = require('./SaleReps/SaleReps')(sequelize, Sequelize);
db.SaleRepTradeShops = require('./SaleReps/SaleRepTradeShops')(sequelize, Sequelize);
db.SaleRepGroup = require('./SaleReps/SaleRepGroup')(sequelize, Sequelize);

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

//Warehouse Models
db.Warehouse = require('./Warehouse/Warehouse')(sequelize, Sequelize);
db.WarehouseResidues = require('./Warehouse/WarehouseResidues')(sequelize, Sequelize);
db.WarehouseTypes = require('./Warehouse/WarehouseTypes')(sequelize, Sequelize);

module.exports = db;