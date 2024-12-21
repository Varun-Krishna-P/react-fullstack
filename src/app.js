import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

await initDatabase()

const post = new Post({
  title: 'Hello Mongoose!',
  author: 'Daniel bug1',
  contents: 'This post is stored in mongoDB database',
  tags: ['moongose', 'mongodb'],
})

await post.save()

const posts = await Post.find()
console.log(posts)
