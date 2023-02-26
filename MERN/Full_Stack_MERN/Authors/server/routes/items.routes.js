const AuthorController = require('../controllers/items.controllers')

module.exports = (app) => {

    //CREATE
    app.post("/api/items/new", AuthorController.addItem)

    //READ ONE
    app.get("/api/items/:id", AuthorController.showItem)

    //READ ALL
    app.get("/api/items", AuthorController.showAllItems)

    //UPDATE
    app.put("/api/items/update/:id", AuthorController.updateItem)

    //DELETE
    app.delete("/api/items/delete/:id", AuthorController.deleteItem)

}