const express = require("express");
const router = express.Router();
const comediansData=require("../data/comedians")

router.get("/", (req, res) => {
    res.render("comedians", {comedians: comediansData});
  });

module.exports=router
