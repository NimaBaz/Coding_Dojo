const User = require('../models/users.model');

/*
! CREATE
*/
module.exports.addUser = (req, res) => {
    User.create(req.body)
        .then(addUser => {
            res.json({ results: addUser })
        })
        .catch((err) => {
            res.status(400).json(err)
        });}

/*
! READ ALL
*/
module.exports.showAllUsers = (req, res) => {
    User.find()
        .then((showAllUsers) => {
            res.json({ results: showAllUsers })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

/*
! READ ONE
*/
module.exports.showUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(showUser => {
            res.json({ results: showUser })
        })
        .catch((err) => {
            res.status(400).json(err)
        });}

/*
! UPDATE
*/
module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updateUser => {
            res.json({ results: updateUser })
        })
        .catch((err) => {
            res.status(400).json(err)
        });}

/*
! DELETE
*/
module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(deleteUser => {
            res.json({ result: deleteUser })
        })
        .catch((err) => {
            res.status(400).json(err)
        });}