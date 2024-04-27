CREATE DATABASE IF NOT EXISTS `market_microservices`;

USE `market_microservices`;

CREATE TABLE
    IF NOT EXISTS `company` (
        `id` VARCHAR(255) NOT NULL PRIMARY KEY,
        `name` VARCHAR(255) NOT NULL,
        `urlImage` VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

CREATE TABLE
    IF NOT EXISTS `market` (
        `id` VARCHAR(255) NOT NULL PRIMARY KEY,
        `name` VARCHAR(255) NOT NULL,
        `urlImage` VARCHAR(255) NOT NULL,
        `company_id` VARCHAR(255) NOT NULL,
        `address` VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        foreign key (`company_id`) references company (`id`)
    );