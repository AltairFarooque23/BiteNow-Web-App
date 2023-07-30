const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    username : {
        type: String,
        required : true,
        unique : true
    },
    password : {
        type: String,
    },
    email : {
        type: String,
        required : true,
        unique : true
    },
    provider: {
        type: String,
         default: 'email'
    },
    provider_id: {
        type: String,
        default: null
    },
    phone : {
        type: Number,
        default : null
    }

}, { timestamps : true });

module.exports = mongoose.model("User",UserSchema);