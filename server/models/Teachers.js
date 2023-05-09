const {model, Schema} = require('mongoose')

module.exports = model('teacher', new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number,
    password: String,
    subject: String,
    group: [
        {
            title: String,
            time: Date,
            students: [Number]
        }
    ]
},  { timestamps: true }))