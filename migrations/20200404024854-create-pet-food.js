'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PetFoods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brandName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      foodName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      petType: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      foodType: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      ingred001: {
        type: Sequelize.STRING
      },
      ingred002: {
        type: Sequelize.STRING
      },
      ingred003: {
        type: Sequelize.STRING
      },
      ingred004: {
        type: Sequelize.STRING
      },
      ingred005: {
        type: Sequelize.STRING
      },
      foodManufacturerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'FoodManufacturers',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PetFoods');
  }
};