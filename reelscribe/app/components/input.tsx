'use client'

import { useState } from 'react'
import Loading from './loading'
import Toggle from './toggle'
import fetchData from '../services/fetchData'

// const fakeData = {
//     "transcript": "If you're looking for a new couch, especially with Black Friday coming up, you absolutely need to check out United Canada. Their range is made in Canada and let me tell you, the quality speaks for itself. I have never felt more comfortable sofas in my life, plus the turnaround times quicker thanks to the local production. But wait, there's more. The warranty is 25 years. Tell me that's not the best deal you've come across. Every piece is highly customizable from the configuration, the material and the color and made with top quality materials. They're authorized retailers for renowned Canadian manufacturers that have been around for over decades like Palisader, Decorest and Marshall. They're open every day of the week with interiors designers in store to consult with. They currently have incredible Black Friday offers on. You could get this so far for your home for just $85 a month, so visit them in Richmond Hill in store or online."
// }


const Input = () => {
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [isToggled, setIsToggled] = useState(false)
    const [data, setData] = useState("")
    const [error, setError] = useState("")

    const downloadAsTxt = (data: string) => {
        const blob = new Blob([data], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'response.txt' 
        a.click()
        URL.revokeObjectURL(url)
    }
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setLoading(true)
        if (message.trim() === '') return
        try {
            const responseClient = await fetchData(message)
            // const responseClient = fakeData
            setData(responseClient?.transcript)
            if(isToggled)downloadAsTxt(responseClient?.transcript)
        } catch (error) {
            setError('An error occurred while fetching the data.')
        }
        setLoading(false)

    }

    const handlePaste = async () => {
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            try {
                const text = await navigator.clipboard.readText()
                setMessage(text)
            } catch (err) {
                console.error('Failed to read clipboard contents: ', err)
                setError('Failed to access clipboard. Please allow clipboard permissions.')
            }
        } else {
            alert('Clipboard API not supported in this browser.')
        }
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className=" w-full bg-[#1e1e1e]"
            >
                <div className="relative flex items-center max-w-4xl mx-auto">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Paste your url here..."
                        className="w-full rounded-lg bg-[#2d2d2d] px-4 py-3 pr-[140px]
                        text-white placeholder-gray-400 focus:outline-none"
                    />
                    <div className="absolute right-2 flex items-center space-x-2 bg-[#2d2d2d]" >
                        <button
                            type="button"
                            className="p-2 text-gray-400 hover:text-gray-300 transition bg-[#2d2d2d]"
                            onClick={handlePaste}
                        >
                            Paste
                        </button>
                        <button
                            type="submit"
                            className="p-2 text-gray-400 hover:text-gray-300 transition bg-[#2d2d2d]"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            <div>
                <Toggle 
                enabledText="Download as txt"  
                disabledText='Do not download'
                isToggled={isToggled}
                setIsToggled={setIsToggled}
                />
                <div className="max-w-4xl mx-auto mt-8">
                    {error && <div className="text-red-500">{error}</div>}
                    {loading ? (
                        <Loading />
                    ) : (
                        data && <div className="text-white">{JSON.stringify(data)}</div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Input