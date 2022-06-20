const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const authRoute = require('./routes/auth');

const keys = require('./config/keys');

/**
 * Экземпляр express пакета
 * @type {*|Express}
 */
const app = express();

/**
 * Подключаем базу данных
 */
mongoose.connect(keys.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch(error => console.log(error));

/**
 * Подключаем passport js для защиты роутов
 */
app.use(passport.initialize());
require('./middleware/passport')(passport);

/**
 * Обрабатываем cors запросы
 */
app.use(cors());

/**
 * Подключаем morgan для удобного отслеживания запросов
 */
app.use(morgan('dev'));


/**
 * Подключаем BodyParser для получения данных при post запросе
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Регистрируем роуты Авторизации и Регистрации
 * Пример - "localhost:5000/api/auth/login"
 */
app.use('/api/auth', authRoute);

module.exports = app;
