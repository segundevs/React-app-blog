import { Link } from 'react-router-dom';

const Blogs = ({ blogs, deletePost }) => {

  return (
    <div>
      {blogs.map(blog => (
        <div className="blog-container" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
          <h1 className="blog-title">{blog.title}</h1> 
          <h3 className="blog-author">Written by: {blog.author}</h3>
          </Link>
        <button onClick={()=>{deletePost(blog.id)}} className="btn-delete">Delete</button>
        </div>
      ))}
      </div>
  )
}

export default Blogs

//<p className="blog-content">{blog.blogContent}</p>
