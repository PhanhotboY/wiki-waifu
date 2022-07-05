const express = require('express');
const wifusRouter = express.Router();

const waifusControllers = require('../app/controllers/WaifusControllers');

wifusRouter.get('/:slug', waifusControllers.details);
wifusRouter.post('/', waifusControllers.postList);
wifusRouter.get('/', waifusControllers.getList);

module.exports = wifusRouter;
