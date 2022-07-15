const waifu_info = require('../models/waifus');
const { multiToObject, singleToObject } = require('../../util/mongoose');

const waifusControllers = {};

//  /waifus/create
// [GET]
waifusControllers.getCreate = (req, res, next) => {
    res.render('waifus/WaifusCreate');
};
// [POST]
waifusControllers.postCreate = (req, res, next) => {
    const { birthMonth, birthDay, ...waifuForm } = req.body;
    waifuForm.dateOfBirth = birthMonth + ' ' + birthDay;

    const waifu = new waifu_info(waifuForm);
    waifu.save().then(() => res.redirect('/waifus'));
};

//  /waifus/edit/:slug
// [GET]
waifusControllers.getEdit = (req, res, next) => {
    waifu_info
        .find({ slug: req.params.slug })
        .then((waifu) => {
            const rmkWaifu = singleToObject(waifu);

            [rmkWaifu.birthMonth, rmkWaifu.birthDay] =
                rmkWaifu.dateOfBirth.split(' ');

            res.render('waifus/WaifusEdit', {
                waifu: rmkWaifu,
            });
        })
        .catch(next);
};
// [PUT]
waifusControllers.putEdit = (req, res, next) => {
    const { birthMonth, birthDay, ...waifuNew } = req.body;
    waifuNew.dateOfBirth = birthMonth + ' ' + birthDay;

    waifu_info
        .updateOne({ slug: req.params.slug }, waifuNew)
        .then(() => res.redirect('/waifus/detail/' + req.params.slug))
        .catch(next);
};

//  /waifus/restore/:slug
// [PATCH]
waifusControllers.restore = (req, res, next) => {
    waifu_info
        .restore({ _id: req.params.slug })
        .then(() => res.redirect('back'))
        .catch(next);
};

//  /waifus/delete/:slug
// [DELETE]
waifusControllers.forceDelete = (req, res, next) => {
    waifu_info
        .deleteOne({ _id: req.params.slug })
        .then(() => res.redirect('back'))
        .catch(next);
};
// [PATCH]
waifusControllers.softDelete = (req, res, next) => {
    waifu_info
        .delete({ _id: req.params.slug })
        .then(() => res.redirect('/waifus/list'))
        .catch(next);
};

//  /waifus/handle-form-actions
// [POST]
waifusControllers.handleFormActiona = (req, res, next) => {
    switch (req.body.action) {
        case 'delete':
            waifu_info
                .delete({ _id: { $in: req.body.id } })
                .then(() => res.redirect('back'))
                .catch(next);
            break;

        case 'restore':
            waifu_info
                .restore({ _id: { $in: req.body.id } })
                .then(() => res.redirect('back'))
                .catch(next);
            break;

        case 'deleteforce':
            waifu_info
                .deleteMany({ _id: { $in: req.body.id } })
                .then(() => res.redirect('back'))
                .catch(next);
            break;

        default:
            res.render('ERROR');
    }
};

//  /waifus/detail/:slug
// [GET]
waifusControllers.detail = (req, res, next) => {
    waifu_info
        .find({ slug: req.params.slug })
        .then((details) =>
            res.render('waifus/WaifusDetails', {
                details: singleToObject(details),
            }),
        )
        .catch(next);
};

// /waifus/filter
// [POST]
waifusControllers.postFilter = (req, res, next) => {
    Promise.all([
        waifu_info.find({ name: new RegExp(req.body.waifuName, 'i') }),
        waifu_info.countDocumentsDeleted(),
    ])
        .then(([info, count]) => {
            res.render('waifus/WaifusList', {
                info: multiToObject(info),
                count,
            });
        })
        .catch(next);
};

// /waifus/abandoned
// [GET]
waifusControllers.getAbandonedList = (req, res, next) => {
    waifu_info
        .findDeleted()
        .then((info) =>
            res.render('waifus/WaifusAbandoned', { info: multiToObject(info) }),
        )
        .catch(next);
};

// /waifus/list
// [GET]
waifusControllers.getLovedList = (req, res, next) => {
    Promise.all([waifu_info.find({}), waifu_info.countDocumentsDeleted()])
        .then(([info, count]) => {
            res.render('waifus/WaifusList', {
                info: multiToObject(info),
                count,
            });
        })
        .catch(next);
};

// /waifus
// [GET]
waifusControllers.get = (req, res, next) => {
    res.redirect('/waifus/list');
};

module.exports = waifusControllers;
