const mongoose = require('mongoose');

const RestuarantSchema = mongoose.Schema({
     name: String,
     rating: String,
     rating_count: String,
     cost: String,
     address: String,
     cuisine: String,
     menu: Object,
})

module.exports =  mongoose.model("Restaurant",RestuarantSchema);