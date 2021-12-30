const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors())
var bodyParser = require('body-parser')

app.post('/novel')

app.get('/novel/:type/:order/:page/:keyword', function(req, res){

})

app.listen(8000, function () {
    console.log('Example app listening on port', 8000);
});