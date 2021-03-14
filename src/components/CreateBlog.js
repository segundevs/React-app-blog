import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateBlog = ({ addBlog }) => {

  const [title, setTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [author, setAuthor] = useState('');
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    const blog = { title, blogContent, author}
    
    addBlog(blog);
    history.push('/');
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="blog-title">Title</label>
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
      </div>

      <div className="form-control">
        <label htmlFor="blog-title">Blog Content</label>
        <textarea name="blog-content" value={blogContent} onChange={(e)=>{setBlogContent(e.target.value)}}/>
      </div>

      <div className="form-control">
        <label htmlFor="blog-title">Author</label>
        <input type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}}/>
      </div>

      <button className="btn">Add Blog</button>
      
    </form>
  )
}

export default CreateBlog
