const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
        min: 6
    },
    last_name:{
        type: String,
        required: true,
        min: 6
    },
    contact:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
        min: 6
    },
    password:{
        type: String,
        required: true,
        min: 6
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);