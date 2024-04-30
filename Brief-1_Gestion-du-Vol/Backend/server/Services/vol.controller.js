'use strict';

const { Vols } = require('../Models/models');

exports.create = async (req, res) => {
    try {
        const vol = await Vols.create(req.body);
        res.json(vol);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

exports.getAll = async (req, res) => {
    try {
        const vols = await Vols.findAll();
        res.json(vols);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

exports.getById = async (req, res) => {
    try {
        const vol = await Vols.findByPk(req.params.id);
        res.json(vol);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

exports.update = async (req, res) => {
    try {
        const vol = await Vols.findByPk(req.params.id);
        if (vol) {
          await vol.update(req.body);
          res.json(vol);
        } else {
          res.status(404).json({ error: 'Vol not found' });
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}
exports.getVolsByArriveDest = async (req, res) => {
  try {
    console.log(req.body.depart);
    console.log(req.body.arrivee);
      const vols = await Vols.findAll(
        {
          where: {
            ville_depart: req.body.depart,
            ville_arrivee: req.body.arrivee
          }
        }
      );
      res.json(vols);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const vol = await Vols.findByPk(req.params.id);
        if (vol) {
          await vol.destroy();
          res.json({ message: 'Vol deleted' });
        } else {
          res.status(404).json({ error: 'Vol not found' });
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}
