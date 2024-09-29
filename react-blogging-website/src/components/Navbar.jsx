import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOutUser } from '../config/firebase/firebasemethods'

const Navbar = () => {

  // useNavigate
  const navigate = useNavigate()

  const logoutUser = async () => {
    const user = await signOutUser();
    
    console.log(user);
    navigate('login')
  }
  return (
    <>
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li> <Link to=''>Homepage</Link></li>
        <li> <Link to = 'dashboard'>Dashboard</Link></li>
        <li> <Link to='profile'>Profile</Link></li>
        <li> <Link to='login'>Login</Link></li>
        <li> <Link to='register'>Register</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-3xl font-bold">Blogging App</a>
  </div>
  <div className="navbar-end">
   <button className="btn btn-primary" onClick={logoutUser}>Logout</button>
    
  </div>
</div>
    </>
  )
}

export default Navbar