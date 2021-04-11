import React, { useRef, useState } from 'react'
import './Video.css'

function Video() {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
        videoRef.current.pause();
        setPlaying(false);
        } else { 
            videoRef.current.play();
            setPlaying(true)
        }
    }
    return (
        <div className='video'>
            <video className="video__player"
            loop 
            onClick={onVideoPress}
            ref={videoRef}
            src="https://v19-us.tiktokcdn.com/b3c121774939a5533374eb1ce83384ab/6072c30f/video/tos/useast2a/tos-useast2a-pve-0068/8c9b175df6af46f886cf2d2a5051546c/?a=1233&br=1608&bt=804&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202104110335470101890660470703F18C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M291dDZkbndoNDMzNzczM0ApO2ZpaGhnM2U8N2hnOmRpNmdoa2xyLWQta2xgLS1kMTZzc2BhLy1iYi1eNF4tLy8vNGE6Yw%3D%3D&vl=&vr="></video>
            
            
        </div>
    )
}

export default Video
