import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = 5000

import { MongoClient } from 'mongodb';
const client = new MongoClient(process.env.MONGO_URI);
export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}


app.get('/', (req, res) => {
    res.send({msg: "Server is running perfectly"})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})