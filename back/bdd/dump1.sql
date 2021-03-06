CREATE SCHEMA `keepr` ;

CREATE TABLE `keepr`.`registered_object` (
  `id` INT NOT NULL,
  `code` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `code_UNIQUE` (`code` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

INSERT INTO `keepr`.`registered_object` (`id`, `code`, `name`) VALUES ('1', 'test1', 'Marteau');
INSERT INTO `keepr`.`registered_object` (`id`, `code`, `name`) VALUES ('2', 'test2', 'Tourne-vis');
INSERT INTO `keepr`.`registered_object` (`id`, `code`, `name`) VALUES ('3', 'test3', 'Perçeuse');

ALTER TABLE `keepr`.`registered_object`
ADD COLUMN `createdAt` VARCHAR(45) NULL AFTER `name`,
ADD COLUMN `updatedAt` VARCHAR(45) NULL AFTER `createdAt`;

ALTER TABLE `keepr`.`registered_object`
CHANGE COLUMN `id` `id` INT(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE `keepr`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

INSERT INTO `keepr`.`user` (`name`, `email`, `type`) VALUES ('Gabriel_Depotte', 'gabriel.depotte@epita.fr', 'admin');
INSERT INTO `keepr`.`user` (`name`, `email`, `type`) VALUES ('Jojo_Palambas', 'jojo.palambas@caramail.gouv', 'user');

ALTER TABLE `keepr`.`user`
ADD COLUMN `createdAt` VARCHAR(45) NULL DEFAULT NULL AFTER `type`,
ADD COLUMN `updatedAt` VARCHAR(45) NULL DEFAULT NULL AFTER `createdAt`;

ALTER TABLE `keepr`.`registered_object`
ADD COLUMN `user_id` INT NULL AFTER `updatedAt`,
ADD INDEX `user_id_idx` (`user_id` ASC) VISIBLE;

ALTER TABLE `keepr`.`registered_object`
ADD CONSTRAINT `user_id`
  FOREIGN KEY (`user_id`)
  REFERENCES `keepr`.`user` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

UPDATE `keepr`.`registered_object` SET `user_id` = '2' WHERE (`id` = '1');
UPDATE `keepr`.`registered_object` SET `user_id` = '2' WHERE (`id` = '2');
UPDATE `keepr`.`registered_object` SET `user_id` = '2' WHERE (`id` = '3');

CREATE TABLE `keepr`.`log` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `createdAt` VARCHAR(45) NULL,
  `updatedAt` VARCHAR(45) NULL,
  `method` VARCHAR(45) NULL,
  `model` VARCHAR(45) NULL,
  `user_id` INT NULL,
  `comment` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `log_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `keepr`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);