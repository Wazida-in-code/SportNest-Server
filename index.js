import express from 'express'
import 'dotenv/config'
import { MongoClient } from 'mongodb';

const app = express()
const PORT = 5000
app.use(express.json())



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

const connectClient = await connectToMongoDB()
const db = connectClient.db('SportNest')
const facilitiesCollection = db.collection('facilities')

app.post('/facilities', async(req, res) => {
    const facilityData = req.body
    const result = await facilitiesCollection.insertOne(facilityData)
    console.log(result);
    res.send(result)
})

app.get('/facilities', async (req, res) => {
    const result = await facilitiesCollection.find().toArray()
    res.send(result)
})


app.get('/', (req, res) => {
    res.send({msg: "Server is running perfectly"})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})