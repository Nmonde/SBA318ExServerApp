const express = require("express");
const router = express.Router();
const dadJokesData=require("../data/dadJokes")

router.get("/", (req, res) => {
    res.render("dadJokes", { dadJokes: dadJokesData});
  })
 
  module.exports=router

