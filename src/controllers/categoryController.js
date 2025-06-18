const { Category } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const { name, parentId } = req.body;
      const category = await Category.create({ name, parentId });
      res.status(201).json(category);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async index(req, res) {
    try {
      const categories = await Category.findAll({
        include: {
          model: Category,
          as: 'subcategories',
        },
      });
      res.json(categories);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async show(req, res) {
    try {
      const category = await Category.findByPk(req.params.id, {
        include: [
          { model: Category, as: 'subcategories' },
          { model: Category, as: 'parent' }
        ]
      });
      if (!category) return res.status(404).json({ error: 'Category not found' });
      res.json(category);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const { name, parentId } = req.body;
      const category = await Category.findByPk(req.params.id);
      if (!category) return res.status(404).json({ error: 'Category not found' });

      await category.update({ name, parentId });
      res.json(category);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) return res.status(404).json({ error: 'Category not found' });

      await category.destroy();
      res.json({ message: 'Category deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
