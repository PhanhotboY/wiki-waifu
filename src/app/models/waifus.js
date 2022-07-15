const mongoose = require('mongoose');
const mongooseSlug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const schema = mongoose.Schema;

// create Model
const waifus = new schema(
    {
        name: String,
        nickName: String,
        dateOfBirth: String,
        age: Number,
        height: String,
        hairColor: String,
        anime: String,
        seiyuu: String,
        image: String,
        slug: { type: String, slug: 'name', unique: true },
    },
    { collection: 'waifu_infos', timestamps: true },
);

/*
 * Plugin
 */
// auto generrate slug
mongoose.plugin(mongooseSlug);
// soft delete
waifus.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: ['find', 'updateOne', 'countDocuments'],
});

module.exports = mongoose.model('waifu_info', waifus);
