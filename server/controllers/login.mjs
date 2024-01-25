import { MongoClient } from "mongodb";
import db from "../db/conn.mjs"
// const connectionString = process.env.ATLAS_URI;
// const client = new MongoClient(connectionString);

const login = async (req, res) => {
    const { email, password } = req.body;
    // let conn;

    // try {
    //     conn = await client.connect();
    // } catch (e) {
    //     console.error(e);
    // }

    // const db = conn.db("get-my-news");
    const collection = db.collection("users");

    const results = await collection.find({ email: email || "", password: password || "" })
        .limit(1)
        .toArray();

    if (results.length === 0) {
        res.status(200).send("Invalid Credentials!");
    } else {
        res.status(200).send("Logged In");
    }

    // You can also add conn.close() here to close the MongoDB connection when done
};

export default login;
