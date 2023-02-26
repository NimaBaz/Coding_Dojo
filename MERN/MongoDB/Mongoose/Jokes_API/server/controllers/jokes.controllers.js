const Joke = require('../models/jokes.model');

module.exports.showAllJokes = (req, res) => {
    Joke.find()
        .then((showAllJokes) => {
            res.json({ results: showAllJokes })
        })
        .catch((err) => {
            res.json({ message: 'This is not da way', error: err })
        });
}

module.exports.showRandomJoke = (req, res) => {
    Joke.aggregate([{$sample:{size:1}}])
        .then((showRandomJoke) => {
            res.json({ results: showRandomJoke })
        })
        .catch((err) => {
            res.json({ message: 'This is not da way', error: err })
        });
}

module.exports.showJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(showJoke => {
            res.json({ results: showJoke })
        })
        .catch((err) => {
            res.json({ message: 'This is not da way', error: err })
        });}

module.exports.addJoke = (req, res) => {
    Joke.create(req.body)
        .then(addJoke => {
            res.json({ results: addJoke })
        })
        .catch((err) => {
            res.json({ message: 'This is not da way', error: err })
        });}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updateJoke => {
            res.json({ results: updateJoke })
        })
        .catch((err) => {
            res.json({ message: 'This is not da way', error: err })
        });}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(deleteJoke => {
            res.json({ result: deleteJoke })
        })
        .catch((err) => {
            res.json({ message: 'This is not da way', error: err })
        });}