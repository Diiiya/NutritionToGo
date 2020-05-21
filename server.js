const express = require('express')
const app = express()
const port = 3000
const dbConfig = require('./config/database').config
//router imports
const indexRouter = require('./routes/indexRouter');

var Connection = require('tedious').Connection
var connection = new Connection(dbConfig);

connection.on('connect', (err) => {
    if(err) {
        console.log('Error: ' + err)
    } else
    console.log(`Connection to database ${dbConfig.server} is successfully established!`)
    connection.close()
})

app.use('/', indexRouter); //Home page

 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))