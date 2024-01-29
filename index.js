import express from "express";
import cors from 'cors';
import students from './controllers/students.mjs';
import "./loadEnvironment.mjs";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Running 3000");
});

app.get("/students", (req, res) => {
    students.GET(req, res);
});

app.post("/students", (req, res) => {
    students.POST(req, res);
});

app.put("/students/:uid", (req, res) => {
    students.PUT(req, res);
});

app.patch("/students/v1/:uid", (req, res) => {
    students.PATCH(req, res);
});

app.delete("/students/d1/:uid", (req, res) => {
    students.DELETE(req, res);
});

app.listen(port, () => {
    console.log(`app is on port ${port}`);
});
