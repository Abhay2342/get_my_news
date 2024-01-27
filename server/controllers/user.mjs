import db from "../db/conn.mjs"
import bcrypt from "bcrypt"

// const POST = async (req, res) => {

//     let { uname, name, email, password } = req.body;

//     const collection = db.collection("users");

//     const existingUser = await collection.findOne({ uname });

//     if (existingUser) {
//         res.status(400).send("User already exists");
//     } else {
//         await collection.insertOne({ uid, sem1, sem2, cgpa });
//         res.status(201).send("User created");
//     }
// };

const GET = async (req, res) => {
    const collection = db.collection("user_details");

    const results = await collection.find()
        .toArray();
    res.send(results);

};

const PATCH = async (req, res) => {
    let uname = req.params.uname;

    let { name, gender, age } = req.body;

    const collection = db.collection("users");

    const existingUser = await collection.findOne({ "uname": uname });
    if (!existingUser) {
        res.status(404).send("User not found");
    } else {
        await collection.updateOne({ "uname": uname }, { $set: { "name": name, "email": email, "gender": gender, "age": age } });
        res.status(200).send("User updated");
    }
};

const UPDATE = async (req, res) => {

    let uname = req.params.uname;
    let { fname, lname, gender, age, about } = req.body;

    const collection = db.collection("users");

    const existingUser = await collection.findOne({ "uname": uname });
    if (!fname) {
        fname = existingUser.fname;
    }
    if (!age) {
        age = existingUser.age;
    }
    if (!lname) {
        lname = existingUser.lname;
    }
    if (!gender) {
        gender = existingUser.gender;
    }
    if (!about) {
        about = existingUser.about;
    }

    if (!existingUser) {
        res.status(404).send("User not found");
    } else {
        await collection.updateOne({ "uname": uname }, { $set: { "fname": fname, "lname": lname, "gender": gender, "age": age } });
        res.status(200).send("User updated");
    }
};

const PASSWORD = async (req, res) => {

};

const DELETE = async (req, res) => {
    let uname = req.params.uname;
    let { password } = req.body;
    console.log(uname, password)

    const collection = db.collection("users");

    try {
        const existingUser = await collection.findOne({ "uname": uname });

        if (!existingUser) {
            res.status(404).send("User not found");
            return;
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);

        if (passwordMatch) {
            await collection.deleteOne({ "uname": uname });
            res.status(200).send("User deleted");
        } else {
            res.status(401).send("Invalid Password");
        }
    } catch (error) {
        console.error("Error during user deletion:", error);
        res.status(500).send("Internal Server Error");
    }
};

export default {
    POST,
    GET,
    UPDATE,
    PATCH,
    DELETE,
    PASSWORD
};
