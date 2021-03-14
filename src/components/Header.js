import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>My blog</h1>
        <div className="links">
        <Link className="link" to='/'>Home</Link>
        <Link className="link" to='/createblog'>Create Blog</Link>
        </div>
    </div>
  )
}

export default Header


