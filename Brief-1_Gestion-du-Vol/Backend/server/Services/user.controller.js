'use strict';

const { Utilisateur } = require('../Models/models');

exports.create = async (req, res) => {
    try {
        const user = await Utilisateur.create(req.body);
        res.json(user);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}
exports.getAll = async (req, res) => {
    try {
        const users = await Utilisateur.findAll();
        res.json(users);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}
exports.getById = async (req, res) => {
    try {
        const user = await Utilisateur.findByPk(req.params.id);
        res.json(user);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}
exports.update = async (req, res) => {
    try {
        const user = await Utilisateur.findByPk(req.params.id);
        if (user) {
          await user.update(req.body);
          res.json(user);
        } else {
          res.status(404).json({ error: 'User not found' });
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}
exports.delete = async (req, res) => {
    try {
        const user = await Utilisateur.findByPk(req.params.id);
        if (user) {
          await user.destroy();
          res.json({ message: 'User deleted' });
        } else {
          res.status(404).json({ error: 'User not found' });
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}
