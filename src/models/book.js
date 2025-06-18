'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // book - category
      Book.belongsToMany(models.Category, {
        through: 'BookCategories',
        foreignKey: 'bookId',
        otherKey: 'categoryId'
      });

      // book - keyword
      Book.belongsToMany(models.Keyword, {
        through: 'BookKeywords',
        foreignKey: 'bookId',
        otherKey: 'keywordId'
      });
    }
  }

  Book.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    price: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    publisher: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Book',
  });
  
  return Book;
};