import { createServer } from 'node:http'
import { MongoClient } from 'mongodb'

const url = 'mongodb://172.17.0.2/'
const dbName = 'ch2'
const mongoClient = new MongoClient(url)

try {
  await mongoClient.connect()
  console.log('Successfully connected to mongo db')
} catch (err) {
  console.error('Error while connecting to mongodb: ', err)
}

const server = createServer(async (req, res) => {
  const db = mongoClient.db(dbName)
  const users = db.collection('users')
  const usersList = await users.find().toArray()
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(usersList))
})

const host = 'localhost'
const port = 3000
server.listen(port, host, () => {
  console.log(`Server running on ${host}: ${port}`)
})
