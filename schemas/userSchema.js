const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    health: {
        type: Number,
        required: true
    },
    gold: {
        type: Number,
        required: true
    },
    inventory: {
        type: [],
        required: true
    },
    secretKey: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('gameUserModel', userSchema)