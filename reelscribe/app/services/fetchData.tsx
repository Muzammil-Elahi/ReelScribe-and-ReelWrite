import axios from "axios"

const fetchData = async (message: string) => {
    const payload = {
        url: message
    }
    try {
        const response = await axios.post("https://be-reelscribe.vercel.app/api/get_transcript", payload, {
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 60000,
        })
        return response.data
    } catch (error: any) {
        if (error.response) {
            if (error.response.status === 504) {
                throw new Error('Gateway Timeout: The server took too long to respond. Please try again later.')
            }
            throw new Error(`Error: ${error.response.data || error.response.statusText}`)
        } else if (error.request) {
            throw new Error('No response from the server. Please check your network connection.')
        } else {
            throw new Error(`Error: ${error.message}`)
        }
    }
}

export default fetchData