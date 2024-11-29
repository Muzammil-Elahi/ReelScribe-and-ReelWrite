import React from 'react'

const VideoComponent = ({url}:{url:string}) => {
  return (
    <div>
      <video width="100%" height="auto" controls>
        <source
          src=""
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoComponent;