const SongController = require('../controllers/song.controllers')

module.exports = (app) => {

    //CREATE
    app.post("/api/songs/new", SongController.addSong)

    //READ ONE
    app.get("/api/songs/:id", SongController.showSong)

    //READ ALL
    app.get("/api/songs", SongController.showAllSongs)

    //UPDATE
    app.put("/api/songs/update/:id", SongController.updateSong)

    //DELETE
    app.delete("/api/songs/delete/:id", SongController.deleteSong)

}