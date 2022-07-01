import express from 'express';
const siteRouter = express.Router();

import siteControllers from '../app/controllers/SiteControllers';

siteRouter.post('/search', siteControllers.post);
siteRouter.get('/search', siteControllers.get);
siteRouter.get('/', siteControllers.home);

export default siteRouter;
