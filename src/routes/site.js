const express = require('express');
const siteRouter = express.Router();

const siteControllers = require('../app/controllers/SiteControllers');

siteRouter.get('/search', siteControllers.get);
siteRouter.get('/', siteControllers.home);

module.exports = siteRouter;
