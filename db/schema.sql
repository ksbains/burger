### Schema
-- DROP IF EXSISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured TINYINT(1) DEFAULT 0,
	created_at VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);