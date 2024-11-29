import axios from "axios";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Only POST requests are allowed" });
    }

    const apiUrl = "https://api.captions.ai/api/creator/list"
    const apiKey = "b42fb0e9-ab37-457e-b83c-d847bee55480"

    try {
        const response = await axios.post(apiUrl, {}, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey
            }
        });

        // Forward the response data to the client
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        res.status(error.response?.status || 500).json({
            message: "Error occurred",
            error: error.response?.data || error.message
        });
    }
}
