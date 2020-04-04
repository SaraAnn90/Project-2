drop database if exists petIndustry_DB;
create database petIndustry_DB;
use petIndustry_DB;
CREATE TABLE foodManufacturers (
    id INT NOT NULL AUTO_INCREMENT,
    bizName VARCHAR(255),
    website VARCHAR (255),
    primary key (id)
);
CREATE TABLE petFoods (
    petFoodId INT NOT NULL AUTO_INCREMENT,
    foodName VARCHAR(255),
    petType VARCHAR(10),
    typeFood VARCHAR(10),
    petManufacturersId INT,
    ingred001 VARCHAR(255),
    ingred002 VARCHAR(255),
    ingred003 VARCHAR(255),
    ingred004 VARCHAR(255),
    ingred005 VARCHAR(255),
    addedToDB DATETIME,
    FOREIGN KEY (petManufacturersId) REFERENCES petManufacturers (id),
    PRIMARY KEY (petFoodId)
); 