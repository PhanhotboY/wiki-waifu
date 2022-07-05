const express = require('express');
const newsRouter = express.Router();

const newsControllers = require('../app/controllers/newsControllers');

newsRouter.get('/:slug', newsControllers.news);
newsRouter.get('/', newsControllers.news);

module.exports = newsRouter;
