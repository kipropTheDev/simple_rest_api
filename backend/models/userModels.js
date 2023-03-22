const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: String,
        unique: true,
        lowercase: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Users', userSchema)