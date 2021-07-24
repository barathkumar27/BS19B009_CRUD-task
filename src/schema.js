const mongoose = require('mongoose');

const { Schema } = mongoose;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const productschema = new Schema({
    name : {
        type: String,
        minlenght: 2,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
    // email : {
    //     type: email,
    //     minlenght: 2,
    //     required: true
    // }
    // date: {
    //     type: Date,
    //     default: Date.now
    // },
    // starred: {
    //     type: Boolean,
    //     default: false
    //}
})

module.exports=productschema