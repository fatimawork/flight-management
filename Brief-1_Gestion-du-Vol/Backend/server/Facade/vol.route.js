'use strict';

const express = require('express');
const path = require('path');
const volController = require('../Services/vol.controller');
const authenticateToken = require('../Middleware/authenticateJwt');

const router = express.Router();

router.post('/',authenticateToken, volController.create);
router.get('/', volController.getAll);
router.get('/getById/:id', volController.getById);
router.put('/:id',authenticateToken, volController.update);
router.delete('/:id',authenticateToken, volController.delete);
router.post('/volsByArriveDest', volController.getVolsByArriveDestDate);

module.exports = router;
