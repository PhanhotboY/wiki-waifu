const waifu_info = require('../models/waifus');

const waifusControllers = {};

// */waifus/:slug
waifusControllers.details = (req, res, next) => {
    waifu_info
        .find({ slug: req.params.slug })
        .then((details) => res.render('WaifusDetails', { details }))
        .catch(next);
};

// */waifus
waifusControllers.getList = (req, res, next) => {
    waifu_info
        .find({})
        .then((info) => res.render('WaifusList', { info }))
        .catch(next);
};

waifusControllers.postList = (req, res, next) => {
    console.log(req.body);
    waifu_info
        .find({ name: req.body.waifuName })
        .then((info) => res.render('WaifusList', { info }))
        .catch(next);
};

module.exports = waifusControllers;
