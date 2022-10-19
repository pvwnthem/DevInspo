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
        type: Number,
        required: false,
        default: 0
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
    }
})



module.exports = mongoose.model('post', postschema)




