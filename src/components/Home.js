import Blogs from './Blogs';
import Loader from "react-loader-spinner";


const Home = ({ blogs, deletePost, loading }) => {

  
  return (
    <div>
      { loading && <Loader className="loader"
        type="TailSpin"
        color="#f1356d"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />}
      { blogs && <Blogs blogs={blogs} deletePost={deletePost}/>}
    </div>
  )
}

export default Home
