import { NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(request: Request) {
  const { script, creatorName } = await request.json()
  
  try {
    const response = await axios.post("https://api.captions.ai/api/creator/submit", 
      { script, creatorName },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.PRIVATE_API_KEY
        },
        timeout: 60000,
      }
    )
    return NextResponse.json(response.data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message }, 
      { status: error.response?.status || 500 }
    )
  }
}