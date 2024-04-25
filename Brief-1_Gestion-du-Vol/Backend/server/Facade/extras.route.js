'use strict';

const express = require('express');
const path = require('path');
const extrasController = require('../Services/extras.controller');

const router = express.Router();

router.post('/', extrasController.create);
router.get('/', extrasController.getAll);
router.get('/:id', extrasController.getById);
router.put('/:id', extrasController.update);
router.delete('/:id', extrasController.delete);

module.exports = router;
