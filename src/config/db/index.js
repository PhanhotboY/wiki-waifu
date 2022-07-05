const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/wiki_waifu');
        console.log('SUCCESSFUL: ', mongoose.connection.name);
    } catch (error) {
        console.log('FAILED: ', mongoose.connection.name);
    }
}

module.exports.connect = connect;
