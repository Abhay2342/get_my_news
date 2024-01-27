import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "mongodb+srv://abhay2342:abhay2342@mr-anon-cluster.xcb8fkw.mongodb.net/";
const client = new MongoClient(connectionString);
let conn;
try {
    conn = await client.connect();
} catch (e) {
    console.error(e);
}
let db = conn.db("users");

export default db;