const { Keyword } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const { word } = req.body;
      const keyword = await Keyword.create({ word });
      res.status(201).json(keyword);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async index(req, res) {
    try {
      const keywords = await Keyword.findAll();
      res.json(keywords);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async show(req, res) {
    try {
      const keyword = await Keyword.findByPk(req.params.id);
      if (!keyword) return res.status(404).json({ error: 'Keyword not found' });
      res.json(keyword);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const { word } = req.body;
      const keyword = await Keyword.findByPk(req.params.id);
      if (!keyword) return res.status(404).json({ error: 'Keyword not found' });

      await keyword.update({ word });
      res.json(keyword);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const keyword = await Keyword.findByPk(req.params.id);
      if (!keyword) return res.status(404).json({ error: 'Keyword not found' });

      await keyword.destroy();
      res.json({ message: 'Keyword deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
