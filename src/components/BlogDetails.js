import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';


const BlogDetails = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState();
  const { id } = useParams();
  const history = useHistory();

  //Fetch single blog post
  useEffect(() => {
   const getBlogPost = async () => {
     try {
     const response = await axios.get(`http://localhost:8000/blogs/${id}`);
     const data = response.data;
     setIsLoading(false)
     setPost(data)
    } catch(err) {
      setErr(err);
    }
  
   }  
  /*  fetch (``)
      .then(res => {
        return res.json()})
      .then(data => {
        setPost(data);
        setIsLoading(false);
      })*/
      getBlogPost()
  }, [id])
  
  const onClick = () => {
    history.push('/');
  }

  return (
    <div>
      {err && <h1>not available</h1>}
      { isLoading && <Loading/>}
      {post && <article className="article-container">
        <h2>{post.title}</h2>
        <h3>Written by:{post.author}</h3>
        <div className="blog-content"><p>{post.blogContent}</p></div>
        <button className="btn-delete" onClick={onClick}>Go back</button>
      </article>}
      
    </div>
  )
}

export default BlogDetails
