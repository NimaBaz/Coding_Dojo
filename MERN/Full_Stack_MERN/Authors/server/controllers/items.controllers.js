const Item = require('../models/items.model');

module.exports.addItem = (req, res) => {
    Item.create(req.body)
        .then(addItem => {
            res.json({ results: addItem })
        })
        .catch((err) => {
            res.status(400).json(err)
        });}

module.exports.showItem = (req, res) => {
    Item.findOne({ _id: req.params.id })
        .then(showItem => {
            res.json({ results: showItem })
        })
        .catch((err) => {
            res.status(400).json(err)
        });}

module.exports.showAllItems = (req, res) => {
    Item.find()
        .then((showAllItems) => {
            res.json({ results: showAllItems })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.updateItem = (req, res) => {
    Item.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updateItem => {
            res.json({ results: updateItem })
        })
        .catch((err) => {
            res.status(400).json(err)
        });}

module.exports.deleteItem = (req, res) => {
    Item.deleteOne({ _id: req.params.id })
        .then(deleteItem => {
            res.json({ result: deleteItem })
        })
        .catch((err) => {
            res.status(400).json(err)
        });}