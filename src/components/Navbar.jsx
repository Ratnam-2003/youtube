import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className='nav'>
    <div className='nav-items'>
        <button className='ham-1'> <i  class="bi bi-list ham" ></i></button>
          <Link to='/'>
            <img className='logo' src="https://tse1.mm.bing.net/th/id/OIP.sCtdNjphAin-gugu0MNptAHaEK?pid=Api&P=0&h=180" alt="" />
        </Link>
      </div>
          <div className='nav-items'>
            <input className='search' type="text" placeholder='Search' />
            <button className='s-btn'><i class="bi bi-search"></i></button>
         <button className='btn-1'> <i class="bi bi-mic-fill mick"></i></button>
          </div>
          <div className='nav-items'>
            <button className='bell-1'><i class="bi bi-plus-lg"></i> Create</button>
            <button className='bell-2'><i class="bi bi-bell"></i></button>
            <button className='bell-3'><i class="bi bi-person-circle"></i></button>

          </div>
          </nav>
   </>
  )
}

export default Navbar
