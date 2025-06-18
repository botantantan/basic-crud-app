'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // link book (id=1) to keyword (id=1)
    await queryInterface.bulkInsert('BookKeywords', [
      { bookId: 1, keywordId: 1, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BookKeywords', null, {});
  }
};
