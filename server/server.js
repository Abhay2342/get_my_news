const express = require("express");
const cors = require('cors');
const api = require('./controllers/api')

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Running 3000")
});

app.get("/api", (req, res) => {
    api.handleApiCall(req, res)
});

app.listen(port, () => {
    console.log(`app is on port ${port}`);
});