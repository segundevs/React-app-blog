import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import CreateBlog from './components/CreateBlog';
import BlogDetails from './components/BlogDetails';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() =>{
    //Set timeout and call the function to fetch all blogs from the useEffect hook
    setTimeout(()=>{
      getBlogs();
    }, 1000)
  }, [])


  //Fetch data from resource
  const getBlogs = async () => {
    const responseData = await fetch ('http://localhost:8000/blogs');

    const response = await responseData.json();

    setBlogs(response)
    //Set loading status back to false after data is fetched
    setIsLoading(false)
  }


  //Add blog post 
  const addBlog = (blogObject) => {
    const postData = async () => {
      await fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify(blogObject)
      })
      //Fetch blogs again after adding blog post
      getBlogs()  
    }
    //set loading status back to false and call the function to post blog
    setIsLoading(false)
    postData(); 
       
  }

  
  
  

  //Delete blog post
  const deletePost = async (id) => {
        await fetch (`http://localhost:8000/blogs/${id}`, {
        method: 'DELETE'
      });
      //Create an object for the new blogs and set it to the new state of the blogs
      const newBlogs = blogs.filter((blog => blog.id !== id));

    setBlogs(newBlogs);
  }

  return (
    <Router>
    <div className="App">
      <Header />
      <div className="container">
      <Switch>
        <Route exact path="/">
          <Home blogs={blogs} deletePost={deletePost} loading={isLoading}/>
        </Route>
        <Route path="/createblog">
          <CreateBlog addBlog={addBlog} />
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails />
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
