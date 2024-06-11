import React, { useRef } from 'react'
import './VidioPlayer.css'
const VideoPlayer = ({play,setPlay}) => {
    const player=useRef(false)

    const closePlayer =(e)=>{
        if(e.target===player.current){
            setPlay(false)
        }
    }

  return (
    <div className={` a_video   ${play ? "":"hide"}  `} ref={player} onClick={closePlayer}>
    <video src="7971025-uhd_3840_2160_24fps.mp4" autoFocus muted controls></video>
    </div>
  )
}

export default VideoPlayer