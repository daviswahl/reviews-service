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
  db.clearAll()
  .then(db.generateAll())
  .then(() => {
    console.log('GENERATED ALL')
    res.status(201).send();
  })
  .catch((err) => {
    throw new Error(err);
  })
});