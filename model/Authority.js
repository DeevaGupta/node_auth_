const mongoose = require('mongoose');

const authoritySchema = new mongoose.Schema({
    full_name:{
        type: String,
        required: true,
        min: 6
    },
    contact:{
        type: Number,
        required: true,
    },
    id_number:{
        type: String || Number,
        required: true
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

module.exports = mongoose.model('authority', authoritySchema);