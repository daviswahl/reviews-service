const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const generate = require('./generateData.js');


const connection = mysql.createConnection(mysqlConfig);

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

var user = generate.createUser();

const addUser = (cb) => {
  connection.query(
    'INSERT INTO Users SET ?', 
    user,
    (err) => {
      if(err) {
        throw new Error(err);
      }
      cb();
    }
  );
}

module.exports = {addUser};