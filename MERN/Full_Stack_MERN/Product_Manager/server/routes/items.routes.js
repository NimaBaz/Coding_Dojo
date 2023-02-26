const ItemController = require('../controllers/items.controllers')

module.exports = (app) => {

    //CREATE
    app.post("/api/items/new", ItemController.addItem)

    //READ ONE
    app.get("/api/items/:id", ItemController.showItem)

    //READ ALL
    app.get("/api/items", ItemController.showAllItems)

    //UPDATE
    app.put("/api/items/update/:id", ItemController.updateItem)

    //DELETE
    app.delete("/api/items/delete/:id", ItemController.deleteItem)

}