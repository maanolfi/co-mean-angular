const mongoose = require('mongoose')

const Post = mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    slug: {type: String, required: true},
    created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model ('Post', Post)