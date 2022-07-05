const mongoose = require('mongoose');

const schema = mongoose.Schema;

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
        slug: String,
    },
    { collection: 'waifu_infos' },
);

module.exports = mongoose.model('waifu_info', waifus);
