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
  return `${RNG(1,12)}-${RNG(1,29)}-${RNG(1998,2018)}`;
}

//random image url generator

const createReview = () => {
  let user_id = Math.random() * 100;
  let review_num = RNG(0,5);
  let submitted_date = generateDate();
  let review_text = text({count: RNG(1,3), units:'paragraph'});
  let likes = RNG(0,500);
  return {
    user_id,
    review_num,
    submitted_date,
    review_text,
    likes  
  }
}

const createUser = () => {
  let user_name = randomName();
  let image_url = 'TBD'; //generateImageUrl();
  let is_allstar = randomInArray([true,false]);
  let favorites = RNG(10,200);
  let recipes_made = RNG(1,100);
  let followers = RNG(50,200);
  return {
    user_name,
    image_url,
    is_allstar,
    favorites,
    recipes_made,
    followers
  }
}

/*
              Data Generator Strategy
------------------------------------------------------

user:

  user_name - random name generator (search for library)
  image_url - random image from imgur
  is_allstar - true or false
  favorites - RNG
  recipes_made - RNG
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