const mongoose = require('mongoose')

const TODOschema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('TODO',TODOschema)