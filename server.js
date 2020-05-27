const express = require('express')
const app = express()
const helmet = require('helmet');
const port = 3000
const DBdevConfig = require('./config/database').development;
const Sequelize = require('sequelize'); 
const cors = require('cors');
const bodyParser = require('body-parser');

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

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
//app.use(helmet());
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}));
/*app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})*/


app.use('/api/restaurants', indexRouter); //Restaurants List

 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;