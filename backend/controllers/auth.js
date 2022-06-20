const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../config/keys');
const error = require('../utils/error');

/**
 * Контроллер для Авторизации пользователя
 *
 * @param request {Object}
 * @param response {Object}
 */
module.exports.login = async function(request, response) {
    const candidate = await User.findOne({
        email: request.body.email
    });

    if (candidate) {
        // Если пользователь существует
        const passwordResult = bcrypt.compareSync(request.body.password, candidate.password);

        if(passwordResult) {
            // Генерация токена
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, keys.JSON_WEB_TOKEN, { expiresIn: 60 * 60 });

            response.status(200).json({
                token: `Bearer ${token}`,
            });
        } else {
            response.status(401).json({
                message: 'Пароли не совпадают. Попробуйте снова.'
            });
        }
    } else {
        response.status(404).json({
            message: 'Пользователь с таким email не найден.'
        });
    }
}

/**
 * Контроллер для регистрации пользователя
 *
 * @param request {Object}
 * @param response {Object}
 */
module.exports.register = async function(request, response) {
    /**
     * Проверяем на существование пользователя
     */
    const candidate = await User.findOne({
        email: request.body.email
    });

    if (candidate) {
        response.status(409).json({
            message: 'Такой email уже существует. Попробуйте другой'
        })
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = request.body.password;

        const user = new User({
            email: request.body.email,
            password: bcrypt.hashSync(password, salt)
        });

        try {
            await user.save()
            response.status(200).json({
                message: 'Пользователь создан'
            });
        } catch (e) {
            error(response, e);
        }

    }

}
