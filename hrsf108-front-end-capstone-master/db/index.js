const mysql = require('mysql');
const Promise = require('bluebird');
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

const db = Promise.promisifyAll(connection);

const clearUsers = () => (
  db.queryAsync('DELETE FROM Users',
    (err) => {
      console.log('CLEARED USERS');
      if (err) {
        throw new Error(err);
      }
    }
  )
);

const clearReviews = () => (
  db.queryAsync('DELETE FROM Reviews',
    (err) => {
      console.log('CLEARED REVIEWS');
      if (err) {
        throw new Error(err);
      }
    }
  )
);

const clearMade = () => (
  db.queryAsync('DELETE FROM user_made_recipe',
    (err) => {
      console.log('CLEARED MADE JOIN TABLE');
      if (err) {
        throw new Error(err);
      }
    }
  )
);

const clearFavorites = () => (
  db.queryAsync('DELETE FROM user_favorited_recipe',
    (err) => {
      console.log('CLEARED FAVORITES JOIN TABLE');
      if (err) {
        throw new Error(err);
      }
    }
  )
);

const addUsers = () => (
  db.queryAsync(
    'INSERT INTO Users SET ?', 
    generate.createUser(),
    (err) => {
      console.log('ADDED USER');
      if (err) {
        throw new Error(err);
      }
    }
  )
);

const addReviews = () => (
  db.queryAsync('INSERT INTO Reviews SET ?',
    generate.createReview(),
    (err) => {
      console.log('ADDED REVIEW');
      if (err) {
        throw new Error(err);
      }
    }
  )
);

const addMadeJoin = () => (
  db.queryAsync('INSERT INTO user_made_recipe SET ?',
    generate.createUserRecipeJoin(),
    (err) => {
      console.log('ADDED MADE JOIN');
      if (err) {
        throw new Error(err);
      }
    }
  )
);

const addFavoritedJoin = () => (
  db.queryAsync('INSERT INTO user_favorited_recipe SET ?',
    generate.createUserRecipeJoin(),
    (err) => {
      console.log('ADDED FAVORITED JOIN');
      if (err) {
        throw new Error(err);
      }
    }
  )
  );
  
const clearAll = () => (
  Promise.all([
    clearUsers(), clearReviews(),
    clearFavorites(),clearMade()
  ])
);

const generateAll = () => {
  let users = [];
  let reviews = [];
  let made = [];
  let favorited = [];
  
  for (var i = 0; i < 10; i++) {
    users.push(addUsers())
    reviews.push(addReviews());
    made.push(addMadeJoin());
    favorited.push(addFavoritedJoin());
  }

  let usersPromise = Promise.all(users);
  let reviewsPromise = Promise.all(reviews);
  let madePromise = Promise.all(made);
  let favoritesPromise = Promise.all(favorited);

  return Promise.all(
    [
      usersPromise,
      reviewsPromise,
      madePromise,
      favoritesPromise
    ]
  );
  
}

module.exports = {clearAll,generateAll};