require("dotenv").config()
const express = require("express")

const PORT = process.env.PORT || 5000

const sequelize = require("./db")

const app = express()

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => {
            console.log('FOO')
        })
    } catch (e) {
        console.log(e)
    }
}

start()

