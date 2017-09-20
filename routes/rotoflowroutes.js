const express = require('express');
const rotaflowController = require('../controllers/controller.js');

const rotaflowRoutes = express.Router();

rotaflowRoutes.get('/', rotaflowController.index);
rotaflowRoutes.get('/:id', rotaflowController.show);
rotaflowRoutes.post('/', rotaflowController.create);

module.exports = rotaflowRoutes;
