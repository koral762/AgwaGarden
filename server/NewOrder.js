const mongoose = require('mongoose');

const NewOrder = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    address: String,
    plants: Array
})

mongoose.model("newOrder", NewOrder);