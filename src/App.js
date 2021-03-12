import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import CreateBlog from './components/CreateBlog';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {

  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    setTimeout(()=>{
      getBlogs();
    }, 1000)
  }, [])

  //Fetch data from resource
  const getBlogs = async () => {
    const responseData = await fetch ('http://localhost:8000/blogs');

    const response = await responseData.json();

    setBlogs(response)

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

      getBlogs()
    }

    postData();    
  }

  //Delete blog post
  const deletePost = async (id) => {
        await fetch (`http://localhost:8000/blogs/${id}`, {
        method: 'DELETE'
      });

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
          <CreateBlog addBlog={addBlog}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
