import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Post } from './Post.jsx'
export function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((post) => (
        <Fragment key={post._id}>
          <Post {...post} />
          <hr />
        </Fragment>
      ))}
    </div>
  )
}

PostList.PropTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(Post.PropTypes)).isRequired,
}
