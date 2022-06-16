const express = require ('express'); 
const app = express();
const readerRouter = require ('./routes/reader');

app.use (express.json());
app.use ('/readers', readerRouter)

app.get('/', (_, res) => {
    res.status(200).json({ result: "Hello World" });
});

module.exports = app;