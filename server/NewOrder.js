const mongoose = require('mongoose');

const NewOrder = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    selectedPlants: Array
})

mongoose.model("newOrder",NewOrder);