const express = require("express");
const app = express();
const db = require("./connection");

app.get('/', (req, res) =>{
    res.send("this is our main endpoint");
})

app.listen(8000, ()=>{
    console.log("books are listening")
})