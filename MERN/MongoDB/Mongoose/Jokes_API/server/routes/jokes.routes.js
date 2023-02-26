const JokeController = require('../controllers/jokes.controllers')

module.exports = (app) => {

    //CREATE
    app.post("/api/jokes/new", JokeController.addJoke)

    //READ RANDOM
    app.get("/api/jokes/random", JokeController.showRandomJoke)

    //READ ONE
    app.get("/api/jokes/:id", JokeController.showJoke)
    
    //READ ALL
    app.get("/api/jokes", JokeController.showAllJokes)

    //UPDATE
    app.put("/api/jokes/update/:id", JokeController.updateJoke)

    //DELETE
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke)

}