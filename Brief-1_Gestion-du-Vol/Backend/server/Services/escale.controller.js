'use strict';

const { Escale } = require('../Models/models');

exports.create = async (req, res) => {
    try {
        const escale = await Escale.create(req.body);
        res.json(escale);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getAll = async (req, res) => {
    try {
        const escales = await Escale.findAll();
        res.json(escales);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getById = async (req, res) => {
    try {
        const escale = await Escale.findByPk(req.params.id);
        if (!escale) {
            return res.status(404).json({ error: 'Escale not found' });
        }
        res.json(escale);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const escale = await Escale.findByPk(req.params.id);
        if (!escale) {
            return res.status(404).json({ error: 'Escale not found' });
        }
        await escale.update(req.body);
        res.json(escale);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const escale = await Escale.findByPk(req.params.id);
        if (!escale) {
            return res.status(404).json({ error: 'Escale not found' });
        }
        await escale.destroy();
        res.json({ message: 'Escale deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
