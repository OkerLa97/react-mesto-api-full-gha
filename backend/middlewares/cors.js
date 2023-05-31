module.exports = (req, res, next) => {
  const { origin } = req.headers; // Записываем в переменную origin соответствующий заголовок

  res.header('Access-Control-Allow-Origin', '*'); // Устанавливаем заголовок, который позволяет запросы с любого домена
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Устанавливаем заголовок, который разрешает браузеру отправлять дополнительные заголовки в запросе
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE'); // Устанавливаем заголовок, который разрешает браузеру отправлять дополнительные заголовки в запросе

  next();
};