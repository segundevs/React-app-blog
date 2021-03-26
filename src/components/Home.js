import Blogs from './Blogs';
import Loading from './Loading';

//Get props from app
const Home = ({ blogs, deletePost, loading, err }) => {

  
  return (
    <div>
      {err && <h1>could not fetch that resource</h1>}
      { loading && <Loading />}
      { blogs && <Blogs blogs={blogs} deletePost={deletePost}/>}
    </div>
  )
}

export default Home
