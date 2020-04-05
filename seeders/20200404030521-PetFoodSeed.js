'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

   return queryInterface.bulkInsert('PetFoods', [{
      brandName:'Blue Buffalo', 
      foodName: 'Healthy Gourmet Chicken',
      petType: 'Cat',
      foodType: 'Wet',
      foodManufacturerId: 6,
      ingred001: 'Chicken',
      ingred002: 'Chicken Broth',
      ingred003: 'Water',
      ingred004: 'Chicken Liver',
      ingred005: 'Dried Egg Product',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brandName: 'Purina', 
      foodName: 'Chicken Entree in Gravy',
      petType: 'Cat',
      foodType: 'Wet',
      foodManufacturerId: 2,
      ingred001: 'Water',
      ingred002: 'Chicken Broth',
      ingred003: 'Wheat Gluten',
      ingred004: 'Meat by-products',
      ingred005: 'Liver',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brandName: '9Lives',
      foodName: 'Tender Morsels with Real Chicken in Sauce',
      petType: 'Cat',
      foodType: 'Wet ',
      foodManufacturerId: 13,
      ingred001: 'Water',
      ingred002: 'Meat By-Products',
      ingred003: 'Chicken',
      ingred004: 'Fish',
      ingred005: 'Wheat Flour',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brandName: 'Wellness Pet Food',
      foodName: 'Complete Health Sliced',
      petType: 'Cat',
      foodType: 'Wet' ,
      foodManufacturerId: 12,
      ingred001: 'Chicken',
      ingred002: 'Chicken Broth',
      ingred003: 'Water',
      ingred004: 'Dried Ground Peas',
      ingred005: 'Dried Egg Whites',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    brandName: 'Meow Mix',
    foodName: 'Savory Morsels with Real Chicken Breast',
    petType: 'Cat',
    foodType: 'Wet' ,
    foodManufacturerId: 13,
    ingred001: 'Fish Broth',
    ingred002: 'Chicken',
    ingred003: 'Sardines',
    ingred004: 'Wheat Gluten',
    ingred005: 'Chicken Liver ',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    brandName: 'Blue Buffalo',
    foodName: 'Life Protection Formula',
    petType: 'Dog',
    foodType: 'Dry',
    foodManufacturerId: 6,
    ingred001: 'Deboned Chicken',
    ingred002: 'Chicken Meal',
    ingred003: 'Brown Rice',
    ingred004: 'Barley',
    ingred005: 'Oatmeal ',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    brandName: 'Nutro',
    foodName: 'Essentials Large Breed Adult Dog Food',
    petType: 'Dog',
    foodType: 'Dry',
    foodManufacturerId: 10,
    ingred001: 'Chicken',
    ingred002: 'Chicken Meal',
    ingred003: 'Brown Rice',
    ingred004: 'Brewers Rice',
    ingred005: 'Split Peas ',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    brandName: 'Hills Pet Nutrition',
    foodName: 'Adult Large Breed Dog Food',
    petType: 'Dog',
    foodType: 'Dry',
    foodManufacturerId: 2,
    ingred001: 'Chicken',
    ingred002: 'Brewers Rice',
    ingred003: 'Whole Grain Wheat',
    ingred004: 'Corn Gluten Meal',
    ingred005: 'Whole Grain Corn',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    brandName: 'Diamond Pet Foods',
    foodName: 'Adult Roasted Chicken, Rice, and Vegetable Flavor',
    petType: 'Dog',
    foodType: 'Dry',
    foodManufacturerId: 5,
    ingred001: 'Chicken',
    ingred002: 'Chicken Meal',
    ingred003: 'Whole Brown Rice',
    ingred004: 'Cracked Pearled Barley',
    ingred005: 'Chicken Fat',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    brandName: 'Wellness Pet Food',
    foodName: 'Healthy Adult Deboned Chicken and Oatmeal',
    petType: 'Dog',
    foodType: 'Dry',
    foodManufacturerId: 12,
    ingred001: 'Deboned Chicken',
    ingred002: 'Chicken Meal',
    ingred003: 'Oatmeal',
    ingred004: 'Ground Barley',
    ingred005: 'Peas',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('PetFoods', null, {});
  }
};
