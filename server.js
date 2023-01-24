const express = require('express')
const connect = require("./config/db")
const Errorhandler = require("./middleware/errorhandler")
const app = express();




connect();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Errorhandler);

app.get('/', (req, res) => {
    res.send("hello world")
})


app.get("/api/health" ,(req,res) =>{
    res.send(`backend server is active status: active & time:${ new Date()}`)
})


// error handling
app.use(function (req, res, next) {
    res.status(404).send("Something went wrong! Please try after some time.");
  })


//connection part
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost"
app.listen(port, () => {
    console.log(`Express server listening at http://${host}:${port}`)
})
