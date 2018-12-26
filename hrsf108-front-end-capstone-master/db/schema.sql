DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;
USE reviews;
		
CREATE TABLE Users (
  id int AUTO_INCREMENT,
  user_name VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  is_allstar ENUM ('true', 'false') NOT NULL,
  followers int NOT NULL,
  PRIMARY KEY (id)
);
		
CREATE TABLE Reviews (
  id int NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  recipe_id int NOT NULL,
  rating int NOT NULL,
  submit_date DATE NOT NULL,
  review_text LONGTEXT NOT NULL,
  likes int NOT NULL,
  PRIMARY KEY (id)
);
		
CREATE TABLE user_made_recipe (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  recipe_id int NOT NULL,
  PRIMARY KEY (id)
);
		
CREATE TABLE user_favorited_recipe (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  recipe_id int NOT NULL,
  PRIMARY KEY (id)
);

<<<<<<< HEAD
CREATE TABLE user_liked_review (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  review_id int NOT NULL,
  PRIMARY KEY (id)
);

=======
>>>>>>> 23e3995060fc931691af53fea543ab1b6cacdcfe
-- ALTER TABLE Reviews ADD FOREIGN KEY (user_id) REFERENCES Users (id);
-- ALTER TABLE user_made_recipe ADD FOREIGN KEY (user_id) REFERENCES Users (id);
-- ALTER TABLE user_made_recipe ADD FOREIGN KEY (recipe_id) REFERENCES Reviews (id);
-- ALTER TABLE user_favorited_recipe ADD FOREIGN KEY (user_id) REFERENCES Users (id);
-- ALTER TABLE user_favorited_recipe ADD FOREIGN KEY (recipe_id) REFERENCES Reviews (id);