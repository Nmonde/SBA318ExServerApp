const express = require("express")
const comediansRouter=require("./routes/comedians")
const dadJokesRouter=require("./routes/dadJokes")
const jokesHealthRouter=require("./routes/jokesHealth")

const app = express()

//view engine
app.set("view engine", "ejs")

//static file
app.use(express.static("public"))

//middleware
app.use("/comedians", comediansRouter)
app.use("/dadJokes", dadJokesRouter)
app.use("/jokesHealth", jokesHealthRouter)

const port = 3000
app.listen(port,()=>{
    console.log(`Port is listening to port Andre ${port}`);
})