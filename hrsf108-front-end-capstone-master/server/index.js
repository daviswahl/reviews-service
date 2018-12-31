var express = require('express');
var bodyParser= require('body-parser');
var db = require('../db/index.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/../public'));


app.get('/Data/:queryString', (req,res) => {
  var query = req.params.queryString;

  /*
    This allows a classic sql injection, I can modify the url and run my own sql queries (dropping tables, getting passwords, etc),
    eg: "http://localhost:7000/Data/USERS;%20DROP%20TABLE%20USERS;"(this doesn't work but you get the idea)
   */
  db.query('SELECT * FROM ' + query, 
  (err,results) => {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).send(results);
  })
})

app.listen(7000, () => {
  console.log('listening on port 7000');
});

module.exports = app;
