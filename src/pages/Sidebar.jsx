import React from 'react'

function Sidebar() {
  return (
    <div className='sidebarr'>
        <div>
          <div className='side-btn'>
            <i class="bi bi-house-door-fill icon"></i>
          <p className='para-item'>Home</p>
          </div>
          <div className='side-btn'>
            <i class="bi bi-caret-right-fill icon"></i>
            <p className='para-item'>Shorts</p>
          </div>
          <div className='side-btn'>
            <i class="bi bi-collection-play icon"></i>
             <p className='para-item'>Subcriptions</p>
          </div>
          <div className='side-btn'>
            <i class="bi bi-person-circle icon"></i>
          <p className='para-item'>You</p>
          </div>
        </div>
      
    </div>
  )
}

export default Sidebar
