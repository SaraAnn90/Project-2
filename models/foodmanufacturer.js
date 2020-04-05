'use strict';
module.exports = (sequelize, DataTypes) => {
  const FoodManufacturer = sequelize.define('FoodManufacturer', {
    bizName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    website: {
      type: DataTypes.STRING,
      isUrl: true
    }
  }, {});
  FoodManufacturer.associate = function(models) {
    // associations can be defined here
    FoodManufacturer.hasMany(models.PetFood);
  };
  return FoodManufacturer;
};