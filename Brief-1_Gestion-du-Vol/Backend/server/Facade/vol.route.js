'use strict';

const express = require('express');
const path = require('path');
const volController = require('../Services/vol.controller');

const router = express.Router();

router.post('/', volController.create);
router.get('/', volController.getAll);
router.get('/getById/:id', volController.getById);
router.put('/:id', volController.update);
router.delete('/:id', volController.delete);
router.post('/volsByArriveDest', volController.getVolsByArriveDestDate);

module.exports = router;
