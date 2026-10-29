import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = 5000

app.get('/', (req, res) => {
    res.send({msg: "Server is running perfectly"})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})