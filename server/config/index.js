const config = {
  db_name: process.env.DB_NAME, // mystore
  db_user: process.env.DB_USER, //root
  db_password: process.env.DB_PASSWORD, // suraj123
  db_host: process.env.DB_HOST,// localhost
  port: process.env.PORT, //3000
  dialect: process.env.dialect
};

module.exports = config;