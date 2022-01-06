const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    release_date: {
        type: Date,
        required: true,
        default: Date.now
    },

    director: {
        type: String,
        required: true
    },
    cast: {
        type: String,
        default: null,
        required: true
    },
    watch_from: {
        type: String,
        default: null,
        required: true
    },
})

module.exports = mongoose.model('Movie', movieSchema)