'use client'

import { useState, useEffect } from 'react'
import Loading from './loading'
import { getVideoStatus } from '../services/generate-ai-video'
import { downloadAsMP4 } from '../utils'

const VideoComponent = ({videoId}: {videoId: string}) => {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    const fetchData = async () => {
      try {
        const response = await getVideoStatus({id: videoId})
        if (response.state === 'COMPLETE') {
          setData(response.url)
          downloadAsMP4(response.url)
          clearInterval(intervalId)
        }
      } catch (err: any) {
        setError(err.message)
      } 
    }
    intervalId = setInterval(fetchData, 30000)
    fetchData()
    return () => clearInterval(intervalId)
  }, [])


  let content
  if (error) {
    content = <p>Error: {error}</p>
  } else if (data) {
    content = (
      <div className="max-w-[600px] h-auto mx-auto">
        <video width="100%" height="auto" controls>
          <source src={data} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  } else {
    content = <Loading loadingText="Please wait 5 to 10 minutes while the AI generates your video—it will appear below shortly!" />
  }

  return <>{content}</>
}

export default VideoComponent