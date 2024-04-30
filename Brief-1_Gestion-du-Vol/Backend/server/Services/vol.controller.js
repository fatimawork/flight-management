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
exports.getVolsByArriveDestDate = async (req, res) => {
  try {
    let whereClause = {
      ville_depart: req.body.depart,
      ville_arrivee: req.body.arrivee,
    }
    if (req.body.date_depart) {
      whereClause.date_depart = req.body.date_depart;
    }
      const vols = await Vols.findAll(
        {
          where: whereClause
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
