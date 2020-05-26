require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_DEV_USERNAME,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_USERNAME,
    host: process.env.DB_DEV_SERVER,
    dialect: "mssql",
    logging: false,
    define:{
      timestamps: false
    },
    dialectOptions:{
      server: process.env.DB_DEV_SERVER,
      authentication:{
        options:{
          type: 'default',
          userName: process.env.DB_DEV_USERNAME,
          password: process.env.DB_DEV_PASSWORD
        }
      },
      options:{
        database: process.env.DB_DEV_USERNAME,
        enableArithAbort: true,
        trustServerCertificate: true
      }
    }
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  }
}
