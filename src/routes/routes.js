const express = require('express');
const router = express();

const UserController = require('../controller/userController');

router.post('/create', UserController.create);
router.post('/login', UserController.login);

module.exports = app => app.use(router);