const randomName = require('node-random-name');
const text = require('lorem-ipsum');

var randomInArray = (array) => {
  return array[Math.floor(Math.random()*array.length)];
}

//random recipe name generator
const generateRecipeName = () => {
  const adjectives = [
    'Cheesy','Spicy','Smoked','Grilled',
    'Baked', 'Boiled', 'Mom\'s', 'Dad\'s',
    'Grandma\'s', 'Grandpa\'s', 'BBQ', 'Vegetarian',
    'Vegan', 'Healthy', 'Gluten-Free', 'Low-Calorie',
    'Low-Fat', 'Gourment', 'Paleo', 'Keto', 'High-Fiber'
  ];
  const food = [
    'Chicken', 'Beef', 'Pork', 'Spaghetti', 'Chili',
    'Mac And Cheese', 'Ramen', 'Potatoes', 'Lamb',
    'Turkey', 'Lobster', 'Clam Chowder', 'Pot Roast',
    'Shrimp', 'Tuna', 'Curry', 'Steak', 'Lunchable',
    'Pizza', 'Oysters', 'Clams', 'Mussels', 'Pizza'
  ];
  return `${randomInArray(adjectives)} ${randomInArray(food)}`;
}

//random number generator
const RNG = (min,max) => {
  return Math.floor(max-Math.random()*(max-min));
}

//random date generator
const generateDate = () => {
  return `${RNG(1998,2018)}-${RNG(1,12)}-${RNG(1,29)}`;
}

const createReview = () => {
  let user_id = RNG(1,100);
  let recipe_id = RNG(1,100);
  let rating = RNG(0,5);
  let submit_date = generateDate();
  let review_text = text({count: 1, units:'sentence'});
  let likes = RNG(0,500);
  return {
    user_id,
    recipe_id,
    rating,
    submit_date,
    review_text,
    likes  
  }
}

const createUser = () => {
  let user_name = randomName();
  let image_url = 'https://vignette.wikia.nocookie.net/bojackhorseman/images/d/d2/BoJack_Horsemann.png/revision/latest?cb=20170924222700';
  let is_allstar = randomInArray(['true','false']);
  let followers = RNG(50,200);
  return {
    user_name,
    image_url,
    is_allstar,
    followers
  }
}

const createUserRecipeJoin = () => {
  let user_id = RNG(1,100);
  let recipe_id = RNG(1,100);
  return {user_id, recipe_id};
}

<<<<<<< HEAD
const createUserReviewJoin = () => {
  let user_id = RNG(1,100);
  let review_id = RNG(1,100);
  return {user_id, review_id};
}

=======
>>>>>>> 23e3995060fc931691af53fea543ab1b6cacdcfe
module.exports = {
  createReview,
  createUser,
  createUserRecipeJoin
}

/*
              Data Generator Strategy
------------------------------------------------------

user:

  user_name - random name generator (search for library)
  image_url - random image
  is_allstar - true or false
  followers - RNG

recipe:

  recipe_name - random word generator
  user_id - random selection from user ids

review:

  recipe_id - random selection from recipe ids
  user_id - random selection from user ids
  review_num - RNG
  submitted_date - random date generator
  review_text - Lorel Ipsum random text generator
  likes - RNG


*/