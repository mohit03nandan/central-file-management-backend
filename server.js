const express = require('express')
const connect = require("./config/db")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



connect();


app.get('/', (req, res) => {
    res.send("hello world")
})



//connection part
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost"
app.listen(port, () => {
    console.log(`Express server listening at http://${host}:${port}`)
})
