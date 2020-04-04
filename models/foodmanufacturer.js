'use strict';
module.exports = (sequelize, DataTypes) => {
  const FoodManufacturer = sequelize.define('FoodManufacturer', {
    bizName: DataTypes.STRING,
    website: DataTypes.STRING
  }, {});
  FoodManufacturer.associate = function(models) {
    // associations can be defined here
  };
  return FoodManufacturer;
};