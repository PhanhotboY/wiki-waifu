const waifu_info = require('../models/waifus');

const siteControllers = {};

// */search
siteControllers.get = (req, res) => {
    res.render('searcher');
};

// */
siteControllers.home = (req, res) => {
    res.render('home');
};

module.exports = siteControllers;
