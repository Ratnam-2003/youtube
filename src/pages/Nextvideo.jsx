import React from 'react'
import { useParams } from 'react-router-dom'

function Nextvideo() {
    const {id}=useParams()
    const embedurl="https://www.youtube.com/embed/"
  return (
    <div>
        <div className='nextv'>
      <iframe className='v-dec'  width="560" height="315" src={embedurl+id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="allowfullscreen"></iframe>
      </div>
    </div>
  )
}

export default Nextvideo
