const UserController = require('../controllers/users.controllers')

module.exports = (app) => {

    /*
    ! CREATE
    */
    app.post("/api/users/new", UserController.addUser)

    /*
    ! READ ALL
    */
    app.get("/api/users", UserController.showAllUsers)

    /*
    ! READ ONE
    */
    app.get("/api/users/:id", UserController.showUser)


    /*
    ! UPDATE
    */
    app.put("/api/users/update/:id", UserController.updateUser)

    /*
    ! DELETE
    */
    app.delete("/api/users/delete/:id", UserController.deleteUser)

}