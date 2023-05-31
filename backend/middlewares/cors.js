module.exports = (req, res, next) => {
  const { origin } = req.headers; // Записываем в переменную origin соответствующий заголовок
  const { method } = req; // Записываем в переменную method соответствующий заголовок

  res.header('Access-Control-Allow-Origin', '*'); // Устанавливаем заголовок, который позволяет запросы с любого домена
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Устанавливаем заголовок, который разрешает браузеру отправлять дополнительные заголовки в запросе
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE'); // Устанавливаем заголовок, который разрешает браузеру отправлять дополнительные заголовки в запросе

  if (method === 'OPTIONS') {
    // разрешаем кросс-доменные запросы с этими заголовками
    res.header('Access-Control-Allow-Headers', requestHeaders);
    // завершаем обработку запроса и возвращаем результат клиенту
    return res.end();
  }

  next();
};