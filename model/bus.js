const  mongoose  = require("mongoose");

const bus_schema = new mongoose.Schema({
    type: String,
    number: Number,
    source: String,
    destination: String,
    path: Array
})



module.exports = mongoose.model('buses', bus_schema)