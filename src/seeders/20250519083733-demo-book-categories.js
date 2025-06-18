'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // link book (id=1) to categories (id=1 and 2)
    await queryInterface.bulkInsert('BookCategories', [
      { bookId: 1, categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 1, categoryId: 2, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BookCategories', null, {});
  }
};
