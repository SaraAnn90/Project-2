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

   return queryInterface.bulkInsert('FoodManufacturers', [
    {
      bizName: 'Mars Petcare Inc.',
      website: 'https://www.mars.com/made-by-mars/petcare',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bizName: 'Nestle Purina PetCare',
      website: 'https://www.purina.com/?icid=purina_food_finder',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bizName: 'Hill\'s Pet Nutrition',
      website: 'https://www.hillspet.com/',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bizName: 'J.M. Smucker',
      website: 'https://www.jmsmucker.com/brands-you-love/pet-foods',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bizName: 'Diamond Pet Foods',
      website: 'https://www.diamondpet.com/',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bizName: 'Blue Buffalo',
      website: 'https://bluebuffalo.com/',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bizName: 'Spectrum Brands/United Pet Group',
      website: 'https://spectrumbrands.com/brands/pet-care.html',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bizName: 'Unichard Corp.',
      website: 'https://www.canidae.com/',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bizName: 'Deuerer',
      website: 'https://www.deuerer.com/en/sprachauswahl_en/',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bizName:'Nutro',
      website: 'https://www.nutro.com/',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bizName: 'Wellness Foods',
      website: 'https://www.wellnesspetfood.com/',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bizName: 'J.M. Smucker',
      website: 'https://www.jmsmucker.com/',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {});
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
