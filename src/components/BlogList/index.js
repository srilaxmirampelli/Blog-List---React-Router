// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogList} = props
  return (
    <ul className="blogs-list-container">
      {blogList.map(blogItem => (
        <BlogItem key={blogItem.id} blogDetails={blogItem} />
      ))}
    </ul>
  )
}

export default BlogList
