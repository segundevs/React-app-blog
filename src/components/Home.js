import Blogs from './Blogs';
import Loading from './Loading';


const Home = ({ blogs, deletePost, loading }) => {

  
  return (
    <div>
      { loading && <Loading />}
      { blogs && <Blogs blogs={blogs} deletePost={deletePost}/>}
    </div>
  )
}

export default Home
