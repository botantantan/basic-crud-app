'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Keywords', [
      { word: 'quantum', createdAt: new Date(), updatedAt: new Date() },
      { word: 'classic', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Keywords', null, {});
  }
};
