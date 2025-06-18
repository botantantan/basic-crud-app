'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Keyword extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // keyword - book
      Keyword.belongsToMany(models.Book, {
        through: 'BookKeywords',
        foreignKey: 'keywordId',
        otherKey: 'bookId'
      });
    }
  }
  Keyword.init({
    word: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Keyword',
  });
  return Keyword;
};