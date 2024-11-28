'use client'

import { useState } from 'react'

const Input = () => {
    const [message, setMessage] = useState('')
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (message.trim() === '') return
    }

    const handlePaste = async () => {
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            try {
                const text = await navigator.clipboard.readText()
                setMessage(text)
            } catch (err) {
                console.error('Failed to read clipboard contents: ', err)
                alert('Failed to access clipboard. Please allow clipboard permissions.')
            }
        } else {
            alert('Clipboard API not supported in this browser.')
        }
    }

    return (
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
                    className="w-full rounded-lg bg-[#2d2d2d] px-4 py-3 pr-16 
            text-white placeholder-gray-400 focus:outline-none"
                />
                <div className="absolute right-2 flex items-center space-x-2">
                    <button
                        type="button"
                        className="p-2 text-gray-400 hover:text-gray-300 transition"
                        onClick={handlePaste}
                    >
                        Paste
                    </button>
                    <button
                        type="submit"
                        className="p-2 text-gray-400 hover:text-gray-300 transition"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Input