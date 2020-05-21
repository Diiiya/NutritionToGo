require('dotenv').config()

exports.config = {
    server: process.env.DB_DEV_SERVER, //make .env file and variable in it
    authentication: {
      type: 'default',
      options: {
        userName: process.env.DB_DEV_USERNAME, //make .env file and variable in it 
        password: process.env.DB_DEV_PASSWORD //make .env file and variable in it
      }
    }
  }