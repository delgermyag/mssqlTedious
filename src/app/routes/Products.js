module.exports = app => {
    const products = require("../controllers/Products/Products");
    const router = require("express").Router();

    router.get('/equipment', products.equipment);

    app.use("/api/products", router);
};