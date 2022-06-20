const express = require('express');
const router = express.Router();

// Подключение контроллеров
const controller = require('../controllers/auth');


/**
 * Роутер отвечающий за авторизацию и регистрацию пользователей
 *
 * @param request {Object}
 * @param response {Object}
 */
router.post('/login', controller.login);
router.post('/register', controller.register);

module.exports = router;
