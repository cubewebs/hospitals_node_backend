CREATE DATABASE IF EXIST `hostpitals_db`;

USE DATABASE `hospitals_db`;

CREATE TABLE `users` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`username` varchar(45) NOT NULL,
`email` varchar(100) NOT NULL,
`password` varchar(255) NOT NULL,
`phone` int(11) DEFAULT NULL,
`role` varchar(45) DEFAULT NULL,
`street` varchar(255) DEFAULT NULL,
`stNumber` varchar(45) DEFAULT NULL,
`door` varchar(45) DEFAULT NULL,
`city` varchar(45) DEFAULT NULL,
`state` varchar(45) DEFAULT NULL,
`country` varchar(45) DEFAULT NULL,
`zip` int(45) DEFAULT NULL,
`x` varchar(145) DEFAULT NULL,
`instagram` varchar(145) DEFAULT NULL,
`facebook` varchar(145) DEFAULT NULL,
`youtube` varchar(145) DEFAULT NULL,
`linkedin` varchar(145) DEFAULT NULL,
`avatar` varchar(255) DEFAULT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `username` (`username`),
UNIQUE KEY `email` (`email`)
)