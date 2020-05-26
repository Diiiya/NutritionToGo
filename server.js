const express = require('express')
const app = express()
const helmet = require('helmet');
const port = 3000
const DBdevConfig = require('./config/database').development;
const Sequelize = require('sequelize'); 
//router imports
const indexRouter = require('./routes/indexRouter');

const sequelize = new Sequelize(DBdevConfig.database, DBdevConfig.username, DBdevConfig.password, {
    host: DBdevConfig.host,
    dialect: DBdevConfig.dialect,
    logging: DBdevConfig.logging,
    dialectOptions:{
      server: DBdevConfig.host,
      authentication:{
        options:{
          type: 'default',
          userName: DBdevConfig.username,
          password: DBdevConfig.password
        }
      },
      options:{
        database: DBdevConfig.username,
        enableArithAbort: true,
        trustServerCertificate: true
      }
    }
  });
 
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(helmet());
app.use('/api/restaurants', indexRouter); //Restaurants List

 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;