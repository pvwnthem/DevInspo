const mongoose = require('mongoose')


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
        type: Array,
        required: false,
        default: []
    },
    tags: {
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
        type: String,
        required: true,
        unique: true
    }
})



module.exports = mongoose.model('post', postschema)




