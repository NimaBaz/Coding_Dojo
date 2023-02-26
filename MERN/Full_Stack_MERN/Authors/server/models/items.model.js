const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "Author is required"],
        minlength: [3, "Author must be 3 characters long"],
    },
    price: {
        type: Number,
        min: [1, "Price must be positive"],
        max: [1000000, "No more tham 1000 characters"]
    },
    description: {
        type: String,
        required: [true, "Description required"],
        minlength: [3, "Description line must be at least 3 characters long"],
        maxlength: [300, "Description can only be 300 characters long"]
    },
    top50: {
        type: Boolean,
        required: [false]
    }
}, {timestamps: true})

module.exports = mongoose.model('Author', AuthorSchema)