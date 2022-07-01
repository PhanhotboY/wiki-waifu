import express from 'express';
const newsRouter = express.Router();

import newsControllers from '../app/controllers/newsControllers';

newsRouter.use('/:slug', newsControllers.news);
newsRouter.use('/', newsControllers.news);

export default newsRouter;
