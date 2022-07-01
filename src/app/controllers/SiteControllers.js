const siteControllers = {};

siteControllers.get = (req, res) => {
    res.render('searcher');
};

siteControllers.post = (req, res) => {
    res.render('products');
};

siteControllers.home = (req, res) => {
    res.render('home');
};

export default siteControllers;
