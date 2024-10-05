const express = require("express")

//instance
const router = express.Router()

router.get("/contact", (req, res) =>{
res.send("welcome home")
})

router.get("/home", (req, res) =>{
    res.send("welcome home")
    })

 router.get("/about", (req, res) =>{
    res.send("welcome home")
        })

 router.get("/info", (req, res) =>{
     res.send("welcome home")
         })
            
 router.get("/dashboard", (req, res) =>{
    res.send("welcome home")
         })
                    

module.exports = router