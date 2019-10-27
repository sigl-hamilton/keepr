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
