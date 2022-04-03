const express = require("express")

const PORT = 8080
const HOST = "0.0.0.0"

const app = express()

app.get("/", (req, res)=>{
    res.send("Welcome to SCA Cloud School Application, this is my first application")
})



app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })