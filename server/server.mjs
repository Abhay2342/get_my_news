import express from "express";
import cors from 'cors';
import api from './controllers/api.mjs';
import login from './controllers/login.mjs';
import "./loadEnvironment.mjs";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Running 3000");
});

app.get("/api", (req, res) => {
    api(req, res);
});

app.post("/login", (req, res) => {
    login(req, res);
});

app.listen(port, () => {
    console.log(`app is on port ${port}`);
});
