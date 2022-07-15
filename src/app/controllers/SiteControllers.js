const waifu_info = require('../models/waifus');
const { multiToObject } = require('../../util/mongoose');

const siteControllers = {};

// [GET]/search
siteControllers.get = (req, res) => {
    res.render('searcher');
};

// [GET] /create
siteControllers.redirCreate = (req, res) => {
    res.redirect('/waifus/create');
};

// [GET] /edit
siteControllers.redirEdit = (req, res) => {
    res.redirect('/waifus/edit');
};

// [GET] /
siteControllers.home = (req, res, next) => {
    waifu_info
        .find({})
        .then((info) => res.render('home', { info: multiToObject(info) }))
        .catch(next);
};

module.exports = siteControllers;
