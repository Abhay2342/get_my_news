import express from "express";
import "./loadEnvironment.mjs";
import cors from 'cors';
import news from './controllers/news.mjs';
import login from './controllers/login.mjs';
import signup from "./controllers/signup.mjs";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Running 3000");
});

// app.get("/api", (req, res) => {
//     api(req, res);
// });

app.get("/news/date", (req, res) => {
    news.date(req, res);
});

app.get("/news/text", (req, res) => {
    news.text(req, res);
});

app.post("/login", (req, res) => {
    login(req, res);
});

app.post("/signup", (req, res) => {
    signup(req, res);
});

app.listen(port, () => {
    console.log(`app is on port ${port}`);
});
