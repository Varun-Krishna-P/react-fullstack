// import { initDatabase } from './db/init.js'
// import { Post } from './db/models/post.js'

// await initDatabase()

// const post = new Post({
//   title: 'Hello Mongoose!',
//   author: 'Daniel bug1',
//   contents: 'This post is stored in mongoDB database',
//   tags: ['moongose', 'mongodb'],
// })

// await post.save()

// const posts = await Post.find()
// console.log(posts)

import express from 'express'
import { postsRoutes } from './routes/posts.js'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.options('*', cors()) // include before other routes

// mounting routes

postsRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello world!')
})

export { app }
