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
      foodName: {
        type: Sequelize.STRING
      },
      petType: {
        type: Sequelize.STRING(10)
      },
      foodType: {
        type: Sequelize.STRING(10)
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
          model: {
            tableName: 'FoodManufacturers',
            schema: 'schema'
          },
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