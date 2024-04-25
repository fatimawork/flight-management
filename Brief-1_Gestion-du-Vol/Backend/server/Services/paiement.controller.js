'use strict';

const { Paiement } = require('../Models/models');

exports.create = async (req, res) => {
    try {
        const paiement = await Paiement.create(req.body);
        res.json(paiement);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

exports.getAll = async (req, res) => {
    try {
        const paiements = await Paiement.findAll();
        res.json(paiements);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

exports.getById = async (req, res) => {
    try {
        const paiement = await Paiement.findByPk(req.params.id);
        res.json(paiement);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

exports.update = async (req, res) => {
    try {
        const paiement = await Paiement.findByPk(req.params.id);
        if (paiement) {
          await paiement.update(req.body);
          res.json(paiement);
        } else {
          res.status(404).json({ error: 'Paiement not found' });
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

exports.delete = async (req, res) => {
    try {
        const paiement = await Paiement.findByPk(req.params.id);
        if (paiement) {
          await paiement.destroy();
          res.json({ message: 'Paiement deleted' });
        } else {
          res.status(404).json({ error: 'Paiement not found' });
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}
