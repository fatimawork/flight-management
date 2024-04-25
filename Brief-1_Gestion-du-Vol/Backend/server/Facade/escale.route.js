'use strict';

const express = require('express');
const path = require('path');
const escaleController = require('../Services/escale.controller');

const router = express.Router();

router.post('/', escaleController.create);
router.get('/', escaleController.getAll);
router.get('/:id', escaleController.getById);
router.put('/:id', escaleController.update);
router.delete('/:id', escaleController.delete);

module.exports = router;
