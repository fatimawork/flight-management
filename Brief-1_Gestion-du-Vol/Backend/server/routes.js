'use strict';

const express = require('express');
const path = require('path');
const usersRouter = require('../server/Facade/user.route');
const reservationRouter = require('../server/Facade/reservation.route');
const extrasRouter = require('../server/Facade/extras.route');
const paiementRouter = require('../server/Facade/paiement.route');
const volRouter = require('../server/Facade/vol.route');
const escaleRouter = require('../server/Facade/escale.route');
const authRouter = require('../server/Facade/auth.route');
const authenticateToken = require('./Middleware/authenticateJwt');

const router = express.Router();

router.use('/users',authenticateToken, usersRouter);
router.use('/reservation',authenticateToken, reservationRouter);
router.use('/extras',authenticateToken, extrasRouter);
router.use('/paiement',authenticateToken, paiementRouter);
router.use('/vol',authenticateToken, volRouter);
router.use('/escale',authenticateToken, escaleRouter);
router.use('/',authRouter)

module.exports = router;
