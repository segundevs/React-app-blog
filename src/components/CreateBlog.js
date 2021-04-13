import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const CreateBlog = ({ addBlog }) => {

  const [title, setTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [author, setAuthor] = useState('');
  const [err, setErr] = useState(false);
  const history = useHistory();
  const { user, isAuthenticated} = useAuth0();


  const handleSubmit = (e) => {
    e.preventDefault()

    const blog = { title, blogContent, author}
  //Check if the input fiels are not empty
    if(title !== '' && blogContent !== '' && author !== ''){
      addBlog(blog);
      history.push('/');
    }else{
  //If input fields are empty, then prompt users to enter a valid blogpost
      setErr(true)
      setTimeout(()=> {
        setErr(false)
      }, 2000)
      history.push('/createblog');
    }  
  }

  return (
    isAuthenticated ? (
    <form onSubmit={handleSubmit}>
      {err && <h1 className="error-msg">Please enter a valid blog post</h1>}
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
  ) : <div>Please login or sign up to post a blog</div>
  ) 
}

export default CreateBlog
