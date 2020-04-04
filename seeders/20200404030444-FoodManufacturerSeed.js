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

   return queryInterface.bulkInsert('FoodManufacturers', [{
      bizName: 'Blue Buffalo',
      website: 'https://bluebuffalo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bizName: 'Meow Mix',
      website: 'https://www.meowmix.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bizName: 'Nutro',
      website: 'https://www.nutro.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bizName: 'Diamond Naturals',
      website: 'https://www.diamondpet.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bizName: 'Wellness Complete',
      website: 'https://www.wellnesspetfood.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bizName: 'Purina',
      website: 'https://www.purina.com',
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
   return queryInterface.bulkDelete('FoodManufacturers', null, {});
  }
};
