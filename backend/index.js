const app = require('./app');
const port = process.env.PORT || 5000;

/**
 * Запуск сервера на express
 */
app.listen(port,() => console.log(`Server has been started ${port}`));
