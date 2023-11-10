const express = require("express")
const comediansRouter=require("./routes/comedians")
const dadJokesRouter=require("./routes/dadJokes")
const jokesHealthRouter=require("./routes/jokesHealth")

const app = express()


//view engine
app.set("view engine", "ejs")

//custom middleware
app.use("/comedians", comediansRouter)
app.use("/dadJokes", dadJokesRouter)
app.use("/jokesHealth", jokesHealthRouter)
//stylesheet link
app.use(express.static("./styles"))

//error middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`Something went wrong. I'm working on it.`);
}
app.use(errorHandler)

//listener
const port = 3000
app.listen(port,()=>{
    console.log(`Port is listening to port Andre:${port}`);
})