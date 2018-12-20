DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;
USE reviews;
DROP TABLE IF EXISTS `Users`;
DROP TABLE IF EXISTS `Reviews`;
DROP TABLE IF EXISTS `user_made_recipe`;
DROP TABLE IF EXISTS `user_favorited_recipe`;
		
CREATE TABLE `Users` (
  `id` INTEGER AUTO_INCREMENT PRIMARY KEY,
  `user_name` VARCHAR(255) NOT NULL,
  `image_url` VARCHAR(255) NOT NULL,
  `is_allstar` ENUM NOT NULL,
  `followers` INT NOT NULL
);
		
CREATE TABLE `Reviews` (
  `id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `recipe_id` INTEGER NOT NULL,
  `rating` INTEGER NOT NULL,
  `submit_date` DATE NOT NULL,
  `review_text` VARCHAR NOT NULL,
  `likes` INTEGER NOT NULL
);
		
CREATE TABLE `user_made_recipe` (
  `id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` INTEGER NOT NULL,
  `recipe_id` INTEGER NOT NULL
);
		
CREATE TABLE `user_favorited_recipe` (
  `id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` INTEGER NOT NULL,
  `recipe_id` INTEGER NOT NULL
);

ALTER TABLE `Reviews` ADD FOREIGN KEY (user_id) REFERENCES `Users` (`id`);
ALTER TABLE `user_made_recipe` ADD FOREIGN KEY (user_id) REFERENCES `Users` (`id`);
ALTER TABLE `user_made_recipe` ADD FOREIGN KEY (recipe_id) REFERENCES `Reviews` (`id`);
ALTER TABLE `user_favorited_recipe` ADD FOREIGN KEY (user_id) REFERENCES `Users` (`id`);
ALTER TABLE `user_favorited_recipe` ADD FOREIGN KEY (recipe_id) REFERENCES `Reviews` (`id`);