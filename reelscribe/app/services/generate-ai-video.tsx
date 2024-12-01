import axios from "axios"

  export const generateVideo = async ({script}: {script: string}) => {
    const payload = {
        creatorName: 'Kira',
        script,
    }
    try {
        const response = await axios.post("/api/generate-video", payload)
        return response.data
    } catch (error: any) {
        if (error.response?.data?.error) {
            throw new Error(error.response.data.error)
        }
        throw new Error(`Error generating video: ${error.message}`)
    }
}

export const getVideoStatus = async ({id}: {id: string}) => {
    try {
        const response = await axios.post("/api/get-video-status", { id })
        return response.data
    } catch (error: any) {
        if (error.response?.data?.error) {
            throw new Error(error.response.data.error)
        }
        throw new Error(`Error: ${error.message}`)
    }
}