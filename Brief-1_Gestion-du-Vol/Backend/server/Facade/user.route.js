'use strict';

const express = require('express');
const path = require('path');
const users_controller = require('../Services/user.controller');

const router = express.Router();


router.get('/', users_controller.getAll);
router.get('/:id', users_controller.getById);
router.put('/:id', users_controller.update);
router.delete('/:id', users_controller.delete);

module.exports = router;
