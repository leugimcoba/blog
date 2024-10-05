const express = require("express")
const router = require("./routes/post.route.js")

//instance
const app = express()

//register
app.use(router)

//create server
app.listen(40000,() => {
    console.log("server started")
})