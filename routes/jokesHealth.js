const express = require("express");
const router = express.Router();
const jokesHealthData=require("../data/jokesHealth")

router.get("/", (req, res) => {
    res.render("jokesHealth", { jokesHealth: jokesHealthData});
  })
 
  module.exports=router
