import { useEffect,useRef } from "react";
import BackgroundVideo from '../Videoplayer/Background.mp4';
import './Videoplayer.scss';
function VideoPlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, [])
    return (
      <div className='video-background'>
        <video autoPlay loop muted controls={false} ref={videoRef}>
          <source src={BackgroundVideo} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  
  export default VideoPlayer;
  