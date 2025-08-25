import React from 'react'

const Button=()=>{
  return (
    <div className='btn-flex'>
    
    <div>
      <button className='button-item'>All</button>
    </div>
    <div>
      <button className='button-item'>Music</button>
    </div>
    <div>
      <button className='button-item'>AI</button>
    </div>
    <div>
      <button className='button-item'>Cinema</button>
    </div>
    <div>
      <button className='button-item'>Mixes</button>
    </div>
    <div>
      <button className='button-item'>Anirudh </button>
    </div>
    <div>
      <button className='button-item'>news</button>
    </div>
    <div>
      <button className='button-item'>Trailers</button>
    </div>
    <div>
      <button className='button-item'>Python</button>
    </div>
    <div>
      <button className='button-item'>ML</button>
    </div>
    <div>
      <button className='button-item'>Live</button>
    </div>
    <div>
      <button className='button-item'>Soundtracks</button>
    </div>
    <div>
      <button className='button-item'>Watched</button>
    </div>
    <div>
      <button className='button-item'>Trailer</button>
    </div>
    <div>
      <button className='button-item'>New to you</button>
    </div>
    </div>
  )
}
function Buttoncontainer() {
  return (
    <div className='btn-container'>
      <Button/>
    </div>
  )
}

export default Buttoncontainer
