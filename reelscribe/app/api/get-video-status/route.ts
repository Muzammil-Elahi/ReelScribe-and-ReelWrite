import { NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(request: Request) {
  const { id } = await request.json()
  const headers = {
    'x-api-key': process.env.PRIVATE_API_KEY,
    'x-operation-id': id,
    'Content-Type': 'application/json',
  }
  try {
    // console.log('Request headers:', headers)
    // console.log('Operation ID:', id)
    const response = await axios.post(
      `https://api.captions.ai/api/creator/poll`,
      {}, // empty body
      { headers }
    )
    
    console.log('Response:', response.data)
    return NextResponse.json(response.data)
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 504) {
        return NextResponse.json(
          { error: 'Gateway Timeout: The server took too long to respond. Please try again later.' },
          { status: 504 }
        )
      }
      return NextResponse.json(
        { error: error.response.data || error.response.statusText },
        { status: error.response.status }
      )
    }
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}