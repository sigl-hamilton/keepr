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
