'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // category - book
      Category.belongsToMany(models.Book, {
        through: 'BookCategories',
        foreignKey: 'categoryId',
        otherKey: 'bookId'
      });

      // parent - child
      Category.hasMany(models.Category, {
        foreignKey: 'parentId',
        as: 'subcategories'
      });

      Category.belongsTo(models.Category, {
        foreignKey: 'parentId',
        as: 'parent'
      });
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};