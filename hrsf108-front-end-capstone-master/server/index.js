var express = require('express');
var bodyParser= require('body-parser');
var db = require('../db/index.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/../public'));


app.get('/Data/:queryString', (req,res) => {
  var query = req.params.queryString;
  db.query('SELECT * FROM ' + query, 
  (err,results) => {
    if (err) {
      throw new Error(err);
      return;
    }
    res.status(200).send(results);
  })
})

app.listen(7000, () => {
  console.log('listening on port 7000');
});

module.exports = app;
