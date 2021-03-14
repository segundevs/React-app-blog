import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Loading from './Loading';


const BlogDetails = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  //Fetch single blog post
  useEffect(() => {
    fetch (`http://localhost:8000/blogs/${id}`)
      .then(res => {
        return res.json()})
      .then(data => {
        setPost(data);
        setIsLoading(false);
      })
  }, [id])
  
  const onClick = () => {
    history.push('/');
  }

  return (
    <div>
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
