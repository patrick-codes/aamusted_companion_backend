const mongoose = require('mongoose');

const detailsSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add the name'],
    },
    date: {
        type: String,
        required: [true, 'Please add date'],
    },

    residencetype: {
        type: String,
        required: [true, 'Please enter residence type'],
    }
});

module.exports = mongoose.model("details", detailsSchema);