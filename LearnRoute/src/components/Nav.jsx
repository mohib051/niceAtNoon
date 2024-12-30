import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex items-center justify-center gap-10'>
         <Link to="/">Home</Link>
         <Link to="/contacts">Contact</Link>
         <Link to="/courses"> Courses</Link>
         <Link to="/about">About</Link>
         
    </div>
  )
}

export default Nav