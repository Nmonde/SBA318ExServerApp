const express = require("express")
const router = express.Router()
const comediansData=require("../data/comedians")
const comedians = require("../data/comedians")

//comedians route 
// router.get("/", (req, res) => {
//     res.render("comedians", {comedians: comediansData});
//   })

  
//comedians routes with query selector with 
router.get("/", (req,res)=> {
  const {state} = req.query;
  if (state) {
    const filteredComedians= comediansData.filter(comedian => comedian.state.toLowerCase() === state.toLowerCase());
    res.json(filteredComedians);
  } else {
    res.render("comedians", {comedians:comediansData});
  }
});

module.exports=router
