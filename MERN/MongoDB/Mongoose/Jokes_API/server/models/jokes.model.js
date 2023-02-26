const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be 3 characters long"],
    },
    joke: {
        type: String,
        required: [true, "Joke is required"],
        minlength: [10, "Joke must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punch line required"],
        minlength: [3, "Punch line must be at least 3 characters long"]
    },
    rating: {
        type: Number,
        min: [0, "Rating must be positive"],
        max: [10, "No more tham 10 characters"]
    }
}, {timestamps: true})

module.exports = mongoose.model('Joke', JokeSchema)