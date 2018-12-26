var express = require('express');
var bodyParser= require('body-parser');
var db = require('../db/index.js');

var app = express();
<<<<<<< HEAD
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
=======
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
>>>>>>> 23e3995060fc931691af53fea543ab1b6cacdcfe
