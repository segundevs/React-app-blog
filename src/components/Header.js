import { Link } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';

const Header = () => {
  return (
    <div className="header">
      <Link to='/' className="no-link"><h1>My blog</h1></Link>
        <div className="links">
        <Link className="link" to='/'>Home</Link>
        <Link className="link" to='/createblog'>Create Blog</Link>
        <Login />
        <Logout />
        </div>
    </div>
  )
}

export default Header


