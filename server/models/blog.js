const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Bloglist = mongoose.model('Bloglist', blogSchema);
module.exports = Bloglist;