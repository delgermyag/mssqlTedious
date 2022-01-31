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

db.Customers = require('./Customers/Customers')(sequelize, Sequelize);
db.Tradeshops = require('./Customers/Tradeshops')(sequelize, Sequelize);
db.SaleRepTradeShops = require('./SaleReps/SaleRepTradeShops')(sequelize, Sequelize);
db.ProductsGroups = require('./Products/ProductGroups')(sequelize, Sequelize);
db.SaleReps = require('./SaleReps/SaleReps')(sequelize, Sequelize);

module.exports = db;