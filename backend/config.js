require('dotenv').config();

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = {
  AUTH_SECRET: NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
  AVATAR_VALIDATION_REGEX: /^(https?:\/\/)([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?#?$/,
};
