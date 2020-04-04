'use strict';
module.exports = (sequelize, DataTypes) => {
  const PetFood = sequelize.define('PetFood', {
    foodName: DataTypes.STRING,
    petType: DataTypes.STRING,
    foodType: DataTypes.STRING,
    ingred001: DataTypes.STRING,
    ingred002: DataTypes.STRING,
    ingred003: DataTypes.STRING,
    ingred004: DataTypes.STRING,
    ingred005: DataTypes.STRING,
  }, {});
  PetFood.associate = function(models) {
    // associations can be defined here
  };
  return PetFood;
};