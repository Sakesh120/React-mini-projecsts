import React, { useRef } from 'react'
import './videoPlayer.css'
import video from '../../assets/college-video.mp4'

const VideoPlayer = ({playState,setPlayState}) => {
const player=useRef(null)

const closePlayer =(e) => {
  if(e.target === player.current){
    setPlayState(false)
  }
}


  return (
    <div ref={player} className={`videoPlayer ${playState ? '' :'hide'}`}  onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
