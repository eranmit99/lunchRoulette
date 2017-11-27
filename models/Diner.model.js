'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dinerSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    likes: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('Diner', dinerSchema);


