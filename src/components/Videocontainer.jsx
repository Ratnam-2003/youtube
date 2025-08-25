import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment/moment'
import BodyShimmer from './shimmer/Bodyshimmer'


const Video= (props) => {
  return <div className='video'>
     <img className='tube-img' src={props.data.snippet.thumbnails.high.url} />
   <h3 className='timb'> {props.data.snippet.title}</h3>
   <p className='timb'>{props.data.snippet.channelTitle}</p>
   <p className='timb'>{valueconvert(props.data.statistics.viewCount)} views &bull; {moment(props.data.snippet.publishedAt).fromNow()}</p>
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
function Videocontainer() {
  const [videoarray,setVideoarray]=useState([])
  async function youtun(){
    const response=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&key=AIzaSyCIzcNtz2S8_2zFxLDnDNWmOkXaHwP6iaU")
    const originaldata=await response.json()
    console.log(originaldata.items)
    setVideoarray(originaldata.items)
  }
  useEffect(()=>{
    youtun()
  },[])
  if (videoarray.length == 0) {
    return <>
      <BodyShimmer/>
      </>
  }
  else{
  return (
    <div className='v-container'>
      {
        videoarray.map((x)=>{
          return <Link to={"/videos/"+x.id} className='link'><Video data={x}/></Link>
        })
      }

    </div>
  )}
}

export default Videocontainer
