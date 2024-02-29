// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, description, publishedDate} = blogDetails
  return (
    <li>
      <div className="blog-item-card">
        <div className="blog-detailed-card">
          <h1 className="blog-title">{title}</h1>
          <p className="blog-description">{description}</p>
        </div>
        <p className="blog-published-date">{publishedDate}</p>
      </div>
      {id !== 5 && <hr className="hr-line" />}
    </li>
  )
}

export default BlogItem
