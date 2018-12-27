const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const generate = require('./generateData.js');

const db = mysql.createConnection(mysqlConfig);

const clearUsers = () => (
  db.query('DELETE FROM Users',
  (err) => {
    if (err) {
        throw new Error(err);
      }
    }
    )
);

const clearReviews = () => (
  db.query('DELETE FROM Reviews',
  (err) => {
    if (err) {
        throw new Error(err);
      }
    }
    )
  );
  
  const clearMade = () => (
  db.query('DELETE FROM user_made_recipe',
  (err) => {
      if (err) {
        throw new Error(err);
      }
    }
  )
  );
  
  const clearFavorites = () => (
    db.query('DELETE FROM user_favorited_recipe',
    (err) => {
      if (err) {
        throw new Error(err);
      }
    }
    )
);

const clearLikes = () => (
  db.query('DELETE FROM user_liked_review',
  (err) => {
    if (err) {
      throw new Error(err);
    }
  }
  )
);

const addUsers = () => (
  db.query(
    'INSERT INTO Users SET ?', 
    generate.createUser(),
    (err) => {
      if (err) {
        throw new Error(err);
      }
    }
    )
);

const addReviews = () => (
  db.query('INSERT INTO Reviews SET ?',
    generate.createReview(),
    (err) => {
      if (err) {
        throw new Error(err);
      }
    }
    )
    );

const addMadeJoin = () => (
  db.query('INSERT INTO user_made_recipe SET ?',
    generate.createUserRecipeJoin(),
    (err) => {
      if (err) {
        throw new Error(err);
      }
    }
    )
);

const addFavoritedJoin = () => (
  db.query('INSERT INTO user_favorited_recipe SET ?',
    generate.createUserRecipeJoin(),
    (err) => {
      if (err) {
        throw new Error(err);
      }
    }
    )
  );

  const addLikedJoin = () => (
    db.query('INSERT INTO user_liked_review SET ?',
      generate.createUserReviewJoin(),
      (err) => {
        if (err) {
          throw new Error(err);
        }
      }
      )
    );

const clearAll = () => {
  clearUsers();
  clearReviews();
  clearFavorites();
  clearMade();
  clearLikes();
}

const generateAll = () => {
  for (var i = 0; i < 5; i++) {
    addUsers();
    addReviews();
    addMadeJoin();
    addFavoritedJoin();
    addLikedJoin();
  }
}

const populateTable = () => {
  clearAll();
  generateAll();
  console.log('GENERATED TABLE');
}

db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected to database');
  populateTable();
});
module.exports = db;
