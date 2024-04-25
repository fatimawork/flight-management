'use strict';

const { Extras } = require('../Models/models');

exports.create = async (req, res) => {
    try {
        const extra = await Extras.create(req.body);
        res.json(extra);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

exports.getAll = async (req, res) => {
    try {
        const extras = await Extras.findAll();
        res.json(extras);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

exports.getById = async (req, res) => {
    try {
        const extra = await Extras.findByPk(req.params.id);
        res.json(extra);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

exports.update = async (req, res) => {
    try {
        const extra = await Extras.findByPk(req.params.id);
        if (extra) {
          await extra.update(req.body);
          res.json(extra);
        } else {
          res.status(404).json({ error: 'Extra not found' });
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

exports.delete = async (req, res) => {
    try {
        const extra = await Extras.findByPk(req.params.id);
        if (extra) {
          await extra.destroy();
          res.json({ message: 'Extra deleted' });
        } else {
          res.status(404).json({ error: 'Extra not found' });
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}
