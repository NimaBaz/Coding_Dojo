const Song = require('../models/song.model');

module.exports.showAllSongs = (req, res) => {
    Song.find()
        .then((showAllSongs) => {
            res.json({ results: showAllSongs })
        })
        .catch((err) => {
            res.json({ message: 'This is not da way', error: err })
        });
}

module.exports.showSong = (req, res) => {
    Song.findOne({ _id: req.params.id })
        .then(showSong => {
            res.json({ results: showSong })
        })
        .catch((err) => {
            res.json({ message: 'This is not da way', error: err })
        });}

module.exports.addSong = (req, res) => {
    Song.create(req.body)
        .then(addSong => {
            res.json({ results: addSong })
        })
        .catch((err) => {
            res.json({ message: 'This is not da way', error: err })
        });}

module.exports.updateSong = (req, res) => {
    Song.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updateSong => {
            res.json({ results: updateSong })
        })
        .catch((err) => {
            res.json({ message: 'This is not da way', error: err })
        });}

module.exports.deleteSong = (req, res) => {
    Song.deleteOne({ _id: req.params.id })
        .then(deleteSong => {
            res.json({ result: deleteSong })
        })
        .catch((err) => {
            res.json({ message: 'This is not da way', error: err })
        });}