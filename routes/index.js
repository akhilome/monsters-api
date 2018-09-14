const { Router } = require('express');
const monstersRouter = require('./monsters');
const habitatsRouter = require('./habitats');
const livesRouter = require('./lives');

const router = Router();

router.use('/monsters', monstersRouter);
router.use('/habitats', habitatsRouter);
router.use('/lives', livesRouter);

module.exports = router;