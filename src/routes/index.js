import newsRouter from './news';
import siteRouter from './site';

const routes = (app) => {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
};

export default routes;
