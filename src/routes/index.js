const newsRouter = require('./news');
const waifusRouter = require('./waifus');
const siteRouter = require('./site');

const routes = (app) => {
    app.use('/waifus', waifusRouter);

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
};

module.exports = routes;
