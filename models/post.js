const mongoose = require('mongoose')

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const postschema = new mongoose.Schema({
    title: {
        type: String,
        required: true

    },
    text: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: false,
        default: 0
    },
    tags: {
        type: Array,
        required: false,
        default: []
    },

    serverTags: {
        type: Array,
        required: false,
        default: []
    },
    date: {
        type: Date,
        required: false,
        default: Date.now
    },
    id: {
        type:  String,
        default: makeid(128),
        unique: true
    }
})



module.exports = mongoose.model('post', postschema)




