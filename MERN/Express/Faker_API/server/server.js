/*
    M = MongoDB
    E = Express
    R = React
    N = Nodejs
*/

//import express and store express in a variable
const express = require("express")
const { faker }  = require('@faker-js/faker')

//initialize the express application and store it in a variable called 'app'
const app = express()

//intialize the port to 8000
const port = 8000

//allow the application to parse json data (form information)
//allow the application to accept form information
app.use(express.json())
app.use(express.urlencoded({extended: true}))

function createUser() {
    return {
        userId: faker.datatype.uuid(),
        firstName: faker.name.fullName(),
        lastName: faker.name.fullName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        phoneNumber: faker.phone.number(),
        registeredAt: faker.date.past(),
    };
}
console.log(createUser())

function createCompany() {
    return {
        companyId: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
}
console.log(createCompany())

//Get All
app.get("/api/users/new", (req, res) => {
    res.json({
        results: createUser()
    })
})

app.get("/api/companies/new", (req, res) => {
    res.json({
        results: createCompany()
    })
})

app.get("/api/user/company", (req, res) => {
    res.json({
        users: createUser(),
        companies: createCompany()
    })
})

//Get One
app.get("/api/user/company/:idx", (req, res) => {
    res.json({
        users: createUser([req.params.idx]),
        companies: createCompany([req.params.idx])
    })
})

//Create One
app.post("/api/user/company", (req, res) => {
    console.log(req.body)
    // menuItems.push(req.body)
    res.json({
        users: createUser(),
        companies: createCompany()
    })
})

//Update One
app.put("/api/user/company/:idx", (req, res) => {
    createUser([req.params.idx]) = req.body;
    createCompany([req.params.idx])= req.body;
    res.json({
        users: createUser(),
        companies: createCompany()
    })
})

//Delete One
app.delete("/api/user/company/:idx", (req, res) => {
    // menuItems.splice(req.params.idx, 1)
    res.json({
        users: createUser(),
        companies: createCompany()
    })
})

app.listen(port, () => console.log(`Welcome to the Death Star! You are on bridge port: ${port}`))

