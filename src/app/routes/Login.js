module.exports = app => {
    const users = require('../controllers/Login/Login');
    const router = require('express').Router();

    router.post('/user', users.create);
    router.get('/user/:id', users.findOne);
    router.put('/user/:id', users.update);
    router.delete('/user/:id', users.delete);

};