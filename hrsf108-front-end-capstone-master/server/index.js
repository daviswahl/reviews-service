var express = require('express');
var bodyParser= require('body-parser');
var db = require('../db/index.js');

var app = express();
app.use(express.static(__dirname + '/../public/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(7000, () => { 
  console.log('listening on port 7000')
});

app.get('/', (req,res) => {
  db.addUser(() => {
    res.status(201).send();
  });
});