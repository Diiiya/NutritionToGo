const express = require('express')
const app = express()
const port = 3000
const DBdevConfig = require('./config/database').development;
const Sequelize = require('sequelize'); 
//router imports
const indexRouter = require('./routes/indexRouter');

const sequelize = new Sequelize(DBdevConfig.database, DBdevConfig.username, DBdevConfig.password, {
    host: DBdevConfig.host,
    dialect: DBdevConfig.dialect,
    options: DBdevConfig.options,
    define: {
      timestamps: false
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


app.use('/', indexRouter); //Home page

 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;