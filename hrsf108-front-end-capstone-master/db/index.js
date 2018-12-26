const mysql = require('mysql');
<<<<<<< HEAD
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
=======
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
>>>>>>> 23e3995060fc931691af53fea543ab1b6cacdcfe
      if (err) {
        throw new Error(err);
      }
    }
  )
<<<<<<< HEAD
  );
  
  const clearFavorites = () => (
    db.query('DELETE FROM user_favorited_recipe',
    (err) => {
=======
);

const clearMade = () => (
  db.queryAsync('DELETE FROM user_made_recipe',
    (err) => {
      console.log('CLEARED MADE JOIN TABLE');
>>>>>>> 23e3995060fc931691af53fea543ab1b6cacdcfe
      if (err) {
        throw new Error(err);
      }
    }
<<<<<<< HEAD
    )
);

const clearLikes = () => (
  db.query('DELETE FROM user_liked_review',
  (err) => {
    if (err) {
      throw new Error(err);
    }
  }
=======
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
>>>>>>> 23e3995060fc931691af53fea543ab1b6cacdcfe
  )
);

const addUsers = () => (
<<<<<<< HEAD
  db.query(
    'INSERT INTO Users SET ?', 
    generate.createUser(),
    (err) => {
=======
  db.queryAsync(
    'INSERT INTO Users SET ?', 
    generate.createUser(),
    (err) => {
      console.log('ADDED USER');
>>>>>>> 23e3995060fc931691af53fea543ab1b6cacdcfe
      if (err) {
        throw new Error(err);
      }
    }
<<<<<<< HEAD
    )
);

const addReviews = () => (
  db.query('INSERT INTO Reviews SET ?',
    generate.createReview(),
    (err) => {
=======
  )
);

const addReviews = () => (
  db.queryAsync('INSERT INTO Reviews SET ?',
    generate.createReview(),
    (err) => {
      console.log('ADDED REVIEW');
>>>>>>> 23e3995060fc931691af53fea543ab1b6cacdcfe
      if (err) {
        throw new Error(err);
      }
    }
<<<<<<< HEAD
    )
    );

const addMadeJoin = () => (
  db.query('INSERT INTO user_made_recipe SET ?',
    generate.createUserRecipeJoin(),
    (err) => {
=======
  )
);

const addMadeJoin = () => (
  db.queryAsync('INSERT INTO user_made_recipe SET ?',
    generate.createUserRecipeJoin(),
    (err) => {
      console.log('ADDED MADE JOIN');
>>>>>>> 23e3995060fc931691af53fea543ab1b6cacdcfe
      if (err) {
        throw new Error(err);
      }
    }
<<<<<<< HEAD
    )
);

const addFavoritedJoin = () => (
  db.query('INSERT INTO user_favorited_recipe SET ?',
    generate.createUserRecipeJoin(),
    (err) => {
=======
  )
);

const addFavoritedJoin = () => (
  db.queryAsync('INSERT INTO user_favorited_recipe SET ?',
    generate.createUserRecipeJoin(),
    (err) => {
      console.log('ADDED FAVORITED JOIN');
>>>>>>> 23e3995060fc931691af53fea543ab1b6cacdcfe
      if (err) {
        throw new Error(err);
      }
    }
<<<<<<< HEAD
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
=======
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
>>>>>>> 23e3995060fc931691af53fea543ab1b6cacdcfe
