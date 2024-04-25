'use strict';

const { Reservation } = require('../Models/models');

exports.create = async (req, res) => {
    try {
        const reservation = await Reservation.create(req.body);
        res.json(reservation);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

exports.getAll = async (req, res) => {
    try {
        const reservations = await Reservation.findAll();
        res.json(reservations);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

exports.getById = async (req, res) => {
    try {
        const reservation = await Reservation.findByPk(req.params.id);
        res.json(reservation);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

exports.update = async (req, res) => {
    try {
        const reservation = await Reservation.findByPk(req.params.id);
        if (reservation) {
          await reservation.update(req.body);
          res.json(reservation);
        } else {
          res.status(404).json({ error: 'Reservation not found' });
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

exports.delete = async (req, res) => {
    try {
        const reservation = await Reservation.findByPk(req.params.id);
        if (reservation) {
          await reservation.destroy();
          res.json({ message: 'Reservation deleted' });
        } else {
          res.status(404).json({ error: 'Reservation not found' });
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}
