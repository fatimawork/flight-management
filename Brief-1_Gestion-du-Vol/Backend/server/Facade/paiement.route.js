'use strict';

const express = require('express');
const path = require('path');
const paiementController = require('../Services/paiement.controller');

const router = express.Router();

router.post('/', paiementController.create);
router.get('/', paiementController.getAll);
router.get('/:id', paiementController.getById);
router.put('/:id', paiementController.update);
router.delete('/:id', paiementController.delete);

module.exports = router;
