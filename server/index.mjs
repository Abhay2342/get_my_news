import express from "express";
import "./loadEnvironment.mjs";
import cors from 'cors';
import news from './controllers/news.mjs';
import login from './controllers/login.mjs';
import signup from "./controllers/signup.mjs";
import user from "./controllers/user.mjs";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Running 3000");
});

app.get("/news/date", (req, res) => {
    news.date(req, res);
});

app.get("/news/text/:text", (req, res) => {
    news.text(req, res);
});

app.get("/news/country/:country", (req, res) => {
    news.country(req, res);
});

app.get("/news/category/:category", (req, res) => {
    news.category(req, res);
});

app.post("/login", (req, res) => {
    login(req, res);
});

app.put("/signup", (req, res) => {
    signup(req, res);
});

app.patch("/user/update/:uname", (req, res) => {
    user.UPDATE(req, res);
});

app.patch("/user/reset/pass/:uname", (req, res) => {
    user.PASSWORD(req, res);
});

app.delete("/user/delete/:uname", (req, res) => {
    user.DELETE(req, res);
});

// app.listen(port, () => {
//     console.log(`app is on port ${port}`);
// });
