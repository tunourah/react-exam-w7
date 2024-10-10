import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../component/Footer'
import '../App.css'
const home = () => {
  return (
    <div className='flex flex-col '>
     <Header    />

        <div className='flex flex-col md:flex-row justify-around items-center h-screen'>
           <div>
            <img src="https://i.pinimg.com/564x/fe/56/21/fe5621aeab0d5e6098c4ed2c57348f87.jpg" alt="books" />
           </div>
           <div className=' flex flex-col items-center justify-between gap-4 '>
            <div>
            <h1 className='font-bold text-2xl mb-2 md:text-6xl  text-center'>
            Get All The Books
            You Need!
            </h1>
            </div>
         
           <div>
           <p className='mx-2 md:text-2xl'>  Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           </div>
           <Link to={'/booksdisplay'}>
            <button className='border-2 flex gap-2 items-center border-black bg-black text-white p-2 md:text-2xl  text-whit hover:rounded-full shadow-lg  '>
                Strat Reading <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

            </button>
</Link>
           </div>
        </div>
        <div>
    <h1 className='text-2xl md:text-4xl font-bold text-center'>Why Choose Us?</h1>
   
</div>
        <div className=' container flex flex-col-reverse md:flex-row justify-around flex-wrap items-center '>

<div>
        <img src="https://i.pinimg.com/564x/aa/45/1e/aa451eb4d83e5e463206131b6627036b.jpg" alt=""  />
    </div>
     <div>
        <ul className='w-full'>
            <li> <h1 className='text-2xl    '>Easy to Use</h1></li>
            <li> <h1 className='text-2xl  '>Fast Delivery</h1></li>
            <li> <h1 className='text-2xl  '>Affordable</h1></li>
            <li> <h1 className='text-2xl  '>Quality Books</h1></li>
        </ul>
     </div>
        </div>
        
        
        <Footer />
    

    </div>
  )
}

export default home