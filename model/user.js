const db = require('../mongodb')

const userSchema = new db.Schema({
    name: String,
    age: Number,
    gender: String
})

const User = db.model('user', userSchema)

module.exports = User
