'use strict';

const express = require('express');
const path = require('path');
const usersRouter = require('../server/Facade/user.route');
const reservationRouter = require('../server/Facade/reservation.route');
const extrasRouter = require('../server/Facade/extras.route');
const paiementRouter = require('../server/Facade/paiement.route');
const volRouter = require('../server/Facade/vol.route');
const escaleRouter = require('../server/Facade/escale.route');

const router = express.Router();

router.use('/users', usersRouter);
router.use('/reservation', reservationRouter);
router.use('/extras', extrasRouter);
router.use('/paiement', paiementRouter);
router.use('/vol', volRouter);
router.use('/escale', escaleRouter);

module.exports = router;
