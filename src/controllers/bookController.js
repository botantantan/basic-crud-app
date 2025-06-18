const { Book, Category, Keyword } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  async create(req, res) {
    try {
      const { title, description, price, stock, publisher, categoryIds, keywordIds } = req.body;

      const book = await Book.create({ title, description, price, stock, publisher });

      if (categoryIds) await book.setCategories(categoryIds);
      if (keywordIds) await book.setKeywords(keywordIds);

      res.status(201).json(book);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async index(req, res) {
    try {
      const {
        search,
        category,
        keyword,
        sortBy = 'title',
        sortOrder = 'ASC'
      } = req.query;

      const where = {};
      if (search) {
        where[Op.or] = [
          { title: { [Op.like]: `%${search}%` } },
          { description: { [Op.like]: `%${search}%` } },
          { publisher: { [Op.like]: `%${search}%` } }
        ];
      }

      const include = [
        {
          model: Category,
          where: category ? { id: category } : undefined,
          through: { attributes: [] }
        },
        {
          model: Keyword,
          where: keyword ? { id: keyword } : undefined,
          through: { attributes: [] }
        }
      ];

      const books = await Book.findAll({
        where,
        include,
        order: [[sortBy, sortOrder.toUpperCase()]]
      });

      res.json(books);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async show(req, res) {
    try {
      const book = await Book.findByPk(req.params.id, {
        include: [Category, Keyword],
      });

      if (!book) return res.status(404).json({ error: 'Book not found' });

      res.json(book);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const { title, description, price, stock, publisher, categoryIds, keywordIds } = req.body;
      const book = await Book.findByPk(req.params.id);

      if (!book) return res.status(404).json({ error: 'Book not found' });

      await book.update({ title, description, price, stock, publisher });

      if (categoryIds) await book.setCategories(categoryIds);
      if (keywordIds) await book.setKeywords(keywordIds);

      res.json(book);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const book = await Book.findByPk(req.params.id);
      if (!book) return res.status(404).json({ error: 'Book not found' });

      await book.destroy();
      res.json({ message: 'Book deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async bulkDelete(req, res) {
    try {
      const { ids } = req.body;
      if (!Array.isArray(ids)) return res.status(400).json({ error: 'ids must be an array' });

      await Book.destroy({ where: { id: ids } });

      res.json({ message: 'Books deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
