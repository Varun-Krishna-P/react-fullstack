import { CreatePost } from './components/CreatePost'
import { Post } from './components/Post'
import { PostFilter } from './components/PostFilter'
import { PostList } from './components/PostList'
import { PostSorting } from './components/PostSorting'
const posts = [
  {
    title: 'Full-Stack React Projects',
    contents: "Let's become a full-stack developer!",
    author: 'Daniel Bug1',
  },
  { title: 'Hello React!' },
]
export function Blog() {
  return (
    <div style={{ padding: 8 }}>
      <CreatePost />
      <hr />
      <br />
      Filter by: <PostFilter field='author' />
      <br />
      <PostSorting fields={['createdAt', 'updatedAt']} />
      <hr />
      <PostList posts={posts} />
    </div>
  )
}
