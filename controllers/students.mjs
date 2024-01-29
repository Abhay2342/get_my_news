import db from "../db/conn.mjs"

const POST = async (req, res) => {

    let { uid, sem1, sem2, cgpa } = req.body;

    sem1 = parseInt(sem1, 10);
    sem2 = parseInt(sem2, 10);
    uid = parseInt(uid, 10);
    cgpa = parseFloat(cgpa);

    const collection = db.collection("user_details");

    const existingUser = await collection.findOne({ uid });

    if (existingUser) {
        res.status(400).send("User already exists");
    } else {
        await collection.insertOne({ uid, sem1, sem2, cgpa });
        res.status(201).send("User created");
    }
};

const GET = async (req, res) => {
    const collection = db.collection("user_details");

    const results = await collection.find()
        .toArray();
    res.send(results);

};

const PUT = async (req, res) => {
    let uid = req.params.uid;

    let { sem1, sem2, cgpa } = req.body;

    sem1 = parseInt(sem1, 10);
    sem2 = parseInt(sem2, 10);
    uid = parseInt(uid, 10);
    cgpa = parseFloat(cgpa);
    const collection = db.collection("user_details");

    const existingUser = await collection.findOne({ "uid": uid });
    if (!existingUser) {
        res.status(404).send("User not found");
    } else {
        await collection.updateOne({ "uid": uid }, { $set: { "sem1": sem1, "sem2": sem2, "cgpa": cgpa } });
        res.status(200).send("User updated");
    }
};

const PATCH = async (req, res) => {
    let uid = req.params.uid;
    let { sem1, sem2, cgpa } = req.body;

    sem1 = parseInt(sem1, 10);
    sem2 = parseInt(sem2, 10);
    uid = parseInt(uid, 10);
    cgpa = parseFloat(cgpa);
    const collection = db.collection("user_details");

    const existingUser = await collection.findOne({ "uid": uid });
    if (!existingUser) {
        res.status(404).send("User not found");
    } else {
        await collection.updateOne({ "uid": uid }, { $set: { "sem1": sem1, "sem2": sem2, "cgpa": cgpa } });
        res.status(200).send("User updated");
    }
};

const DELETE = async (req, res) => {
    let uid = req.params.uid;
    uid = parseInt(uid, 10);
    const collection = db.collection("user_details");

    const existingUser = await collection.findOne({ "uid": uid });
    if (!existingUser) {
        res.status(404).send("User not found");
    } else {
        await collection.deleteOne({ uid });
        res.status(200).send("User deleted");
    }
};

export default {
    POST,
    GET,
    PUT,
    PATCH,
    DELETE
};
