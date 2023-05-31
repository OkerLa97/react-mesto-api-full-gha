const express = require('express');

const { errors } = require('celebrate');
const NotFoundError = require('../errors/NotFoundError');

const { requestLogger, errorLogger } = require('../middlewares/logger');

const errorHandler = require('../middlewares/errorHandler');
const auth = require('../middlewares/auth');
const cors = require('../middlewares/cors');

const router = express.Router();

// логгер запросов
router.use(requestLogger);

// cors
router.use(cors);

// тестовый роут для проверки автоматического перезапуска сервера
router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

// роуты, не требующие авторизации
router.use('/signin', require('./signin'));
router.use('/signup', require('./signup'));

// авторизация
router.use(auth);

// роуты, требующие авторизации
router.use('/users', require('./users'));
router.use('/cards', require('./cards'));

// логгер ошибок
router.use(errorLogger);

// обработчик ошибки 404
router.use((req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
});

// обработчик ошибок celebrate
router.use(errors());

// здесь обрабатываем все ошибки
router.use(errorHandler);

module.exports = router;
