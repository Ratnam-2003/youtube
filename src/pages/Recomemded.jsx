import React, { useEffect, useState } from 'react'
//import { useParams } from 'react-router-dom'
import moment from 'moment/moment'


const Video=(props)=>{
    return <div className='side-video-list'>
            <img className='image' src={props.data.snippet.thumbnails.medium.url} alt="" />
            <div className='vid-info'>
                <h4 className='dots'>{props.data.snippet.title}</h4>
                <p >{props.data.snippet.channelTitle}</p>
                <p>{valueconvert(props.data.statistics.viewCount)} views &bull; {moment(props.data.snippet.publishedAt).fromNow()}</p>
            </div>
        </div>
}
const valueconvert= (value)=>{
  if(value>=1000000)
  {
    return Math.floor(value/1000000)+"M";
  }
  else if(value>=1000){
        return Math.floor(value/1000)+"K";

  }
  else{
    return value;
  }

}
 
function Recomemded(){
//const {categoryId}= useParams() 
     const [videoarray,setVideoarray]=useState([])
     async function fetchData(){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&videoCategoryId=0&key=AIzaSyCIzcNtz2S8_2zFxLDnDNWmOkXaHwP6iaU`)
        const relateVideo=await response.json()
        console.log(relateVideo.items)
        setVideoarray(relateVideo.items)

    } 
    
    useEffect(()=>{
        fetchData()
    },[])
    return (
      
    <div className='recomended'>
        {
        videoarray.map((x)=>{
            return <Video data={x}/>
        })

    }                
    </div>
          

  )
}

export default Recomemded

