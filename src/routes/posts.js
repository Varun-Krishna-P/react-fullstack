import { API_V1_ROUTE } from './app_consts.js'
import {
  listAllPosts,
  listPostsByAuthor,
  listPostsByTag,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from '../services/posts.js'

export function postsRoutes(app) {
  app.get(API_V1_ROUTE + 'posts', async (req, res) => {
    const { sortBy, sortOrder, author, tag } = req.query
    const options = { sortBy, sortOrder }
    try {
      if (author && tag) {
        return res
          .status(400)
          .json({ error: 'query by either author or tag, not both!' })
      } else if (author) {
        return res.json(await listPostsByAuthor(author, options))
      } else if (tag) {
        return res.json(await listPostsByTag(tag, options))
      } else {
        return res.json(await listAllPosts(options))
      }
    } catch (err) {
      console.error(`error listing posts: ${err}`)
      return res.status(500).end()
    }
  })

  app.post(API_V1_ROUTE + 'posts', async (req, res) => {
    try {
      const post = await createPost(req.body)
      return res.json(post)
    } catch (err) {
      console.error(`error while creating post: ${err}`)
      return res.status(500).end()
    }
  })

  app.patch(`${API_V1_ROUTE}posts/:id`, async (req, res) => {
    try {
      const post = await updatePost(req.params.id, req.body)
      return res.json(post)
    } catch (err) {
      console.error(`error while updating post: ${err}`)
      return res.status(500).end()
    }
  })

  app.delete(`${API_V1_ROUTE}posts/:id`, async (req, res) => {
    try {
      const { deletedCount } = await deletePost(req.params.id)
      if (deletedCount === 0) return res.sendStatus(404)
      return res.status(204).end()
    } catch (err) {
      console.error(`error while deleting post: ${err}`)
      return res.status(500).end()
    }
  })
}
