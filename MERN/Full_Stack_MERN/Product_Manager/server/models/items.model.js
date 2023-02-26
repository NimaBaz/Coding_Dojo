const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be 3 characters long"],
    },
    price: {
        type: Number,
        min: [0, "Price must be positive"],
        max: [1000, "No more tham 1000 characters"]
    },
    description: {
        type: String,
        required: [true, "Description required"],
        minlength: [3, "Description line must be at least 3 characters long"],
        maxlength: [300, "Description can only be 300 characters long"]
    }
}, {timestamps: true})

module.exports = mongoose.model('Item', ItemSchema)