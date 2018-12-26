const db = require('../db/index.js');
const request = require('request-promise');
const http = require('http');

// check connection
  
  http.get('http://localhost:7000/Data/Users', res => {
    console.log('statuscode is 200: ',res.statusCode === 200);
  }).on('error', error => {
    console.log(error);
  })


// check structure of data
  // reviews
  db.query('SELECT * FROM Reviews', (err, results) => {
    if (err) {
      throw new Error(err);
    }
    console.log('\nREVIEWS TESTS\n')
    console.log('Has id: ',results[0].hasOwnProperty('id'));
    console.log('id is num: ', typeof results[0].id === 'number');
    console.log('Has user id: ',results[0].hasOwnProperty('user_id'));
    console.log('user id is num: ',typeof results[0].user_id === 'number');
    console.log('has recipe id: ',results[0].hasOwnProperty('recipe_id'));
    console.log('recipe id is num: ',typeof results[0].recipe_id === 'number');
    console.log('Has rating: ', results[0].hasOwnProperty('rating'));
    console.log('rating is num: ',typeof results[0].rating === 'number');
    console.log('Has submit date: ',results[0].hasOwnProperty('submit_date'));
    console.log('submit date is string: ',typeof results[0].submit_date === 'object');
    console.log('Has review text: ',results[0].hasOwnProperty('review_text'));
    console.log('review text is string: ',typeof results[0].review_text === 'string');
    console.log('Has likes: ',results[0].hasOwnProperty('likes'));
    console.log('likes is num: ',typeof results[0].likes === 'number');
  });

  // // users
  db.query('SELECT * FROM Users', (err, results) => {
    if (err) {
      throw new Error(err);
    }
    console.log('\nUSER TESTS\n')
    console.log('has id: ',results[0].hasOwnProperty('id'));
    console.log('id is num: ',typeof results[0].id === 'number');
    console.log('has user name: ',results[0].hasOwnProperty('user_name'));
    console.log('user name is string: ',typeof results[0].user_name === 'string');
    console.log('has image url: ',results[0].hasOwnProperty('image_url'));
    console.log('image url is string: ',typeof results[0].image_url === 'string');
    console.log('has is allstar: ',results[0].hasOwnProperty('is_allstar'));
    console.log('is allstar is string: ',typeof results[0].is_allstar === 'string');
    console.log('has followers: ',results[0].hasOwnProperty('followers'));
    console.log('followers is num: ',typeof results[0].followers === 'number');
  });


  // // favorite join table
  db.query('SELECT * FROM user_favorited_recipe', (err, results) => {
    if (err) {
      throw new Error(err);
    }
    console.log('\nUSER_FAVORITED_RECIPE TESTS\n')
    console.log('Has id: ',results[0].hasOwnProperty('id'));
    console.log('id is num: ', typeof results[0].id === 'number');
    console.log('Has user id: ',results[0].hasOwnProperty('user_id'));
    console.log('user id is num: ',typeof results[0].user_id === 'number');
    console.log('has recipe id: ',results[0].hasOwnProperty('recipe_id'));
    console.log('recipe id is num: ',typeof results[0].recipe_id === 'number');
  });

  // // made join table
  db.query('SELECT * FROM user_made_recipe', (err, results) => {
    if (err) {
      throw new Error(err);
    }
    console.log('\nUSER_MADE_RECIPE TESTS\n')
    console.log('Has id: ',results[0].hasOwnProperty('id'));
    console.log('id is num: ', typeof results[0].id === 'number');
    console.log('Has user id: ',results[0].hasOwnProperty('user_id'));
    console.log('user id is num: ',typeof results[0].user_id === 'number');
    console.log('has recipe id: ',results[0].hasOwnProperty('recipe_id'));
    console.log('recipe id is num: ',typeof results[0].recipe_id === 'number');
  });