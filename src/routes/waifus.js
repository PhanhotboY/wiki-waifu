const express = require('express');
const wifusRouter = express.Router();

const waifusControllers = require('../app/controllers/WaifusControllers');

// /waifus/handle-form-actions
wifusRouter.post('/handle-form-actions', waifusControllers.handleFormActiona); // handle form checkbox action

// /waifus/delete/:slug
wifusRouter.delete('/delete/:slug/force', waifusControllers.forceDelete); // permanently delete
wifusRouter.patch('/delete/:slug', waifusControllers.softDelete); // soft delete

// /waifus/abandoned
wifusRouter.get('/abandoned', waifusControllers.getAbandonedList); // full abandoned list

// /waifus/restore/:slug
wifusRouter.patch('/restore/:slug', waifusControllers.restore); // restore waifu

// /waifus/detail/:slug
wifusRouter.get('/detail/:slug', waifusControllers.detail); // detail page

// /waifus/edit/:slug
wifusRouter.put('/edit/:slug', waifusControllers.putEdit); // request edit
wifusRouter.get('/edit/:slug', waifusControllers.getEdit); // edit page

// /waifus/filter
wifusRouter.post('/filter', waifusControllers.postFilter); // filtered list

// /waifus/create/:slug
wifusRouter.post('/create', waifusControllers.postCreate); // request create
wifusRouter.get('/create', waifusControllers.getCreate); // create page

// /waifus/list
wifusRouter.get('/list', waifusControllers.getLovedList); // full to be loved list

// /waifus/:slug
wifusRouter.get('/', waifusControllers.get); // full list

module.exports = wifusRouter;
