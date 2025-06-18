'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      { name: 'Science', parentId: null, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Physics', parentId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Literature', parentId: null, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
