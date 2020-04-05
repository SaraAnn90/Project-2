'use strict';
module.exports = (sequelize, DataTypes) => {
  const PetFood = sequelize.define('PetFood', {
    brandName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    foodName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    petType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    foodType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingred001: DataTypes.STRING,
    ingred002: DataTypes.STRING,
    ingred003: DataTypes.STRING,
    ingred004: DataTypes.STRING,
    ingred005: DataTypes.STRING,
  }, {});
  PetFood.associate = function(models) {
    // associations can be defined here
    PetFood.belongsTo(models.FoodManufacturer);
  };
  return PetFood;
};