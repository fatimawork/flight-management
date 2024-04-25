'use strict';

const express = require('express');
const path = require('path');
const reservationController = require('../Services/reservation.controller');

const router = express.Router();

router.post('/', reservationController.create);
router.get('/', reservationController.getAll);
router.get('/:id', reservationController.getById);
router.put('/:id', reservationController.update);
router.delete('/:id', reservationController.delete);

module.exports = router;
