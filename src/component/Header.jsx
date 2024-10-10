import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className='flex justify-between items-center p-4 shadow-lg'>
    {/* logo */}
 <div>
 <h1 className='font-extrabold text-lg text-enter'>Books</h1>
 </div>
       <ul className='flex gap-4'>
         <li>
       <Link to={"/home"}>Home</Link>    
         </li>
         {/* <li>
       <Link to={'/login'}>Login</Link>   
         </li> */}
         {/* <li>
      <Link to={"/signup"}></Link> Sign up
         </li> */}
         
         </ul>
       <div className='flex'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
 </svg>
 <Link to={"/login"}>
 <button>
    Log out 
 </button>
    </Link>
       </div>
 
         </nav>
  )
}

export default Header