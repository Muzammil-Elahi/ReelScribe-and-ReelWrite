'use client'

import { useEffect, useState } from 'react'

interface DisplaySectionProps {
    transcribedData: string
    rewrittenData: string
    setRewrittenData: (data: string) => void
    handleVideoGeneration: () => void
}

const DisplaySection = ({
    transcribedData,
    rewrittenData,
    setRewrittenData,
    handleVideoGeneration
}: DisplaySectionProps) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <div className="max-w-4xl mx-auto mt-8">
   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {transcribedData && (
            <div className="text-white border p-4 rounded bg-gray-800">
                <h3 className="font-bold mb-2">Transcribed Script</h3>
                <p>{transcribedData}</p>
            </div>
        )}
        {rewrittenData !== undefined && rewrittenData?.length > 0 && (
            <div className="text-white border p-4 rounded bg-gray-800">
                <h3 className="font-bold mb-2">Rewritten Script</h3>
                <textarea
                    className="w-full h-80 p-2 bg-gray-700 text-white rounded resize-none"
                    value={rewrittenData}
                    onChange={(e) => setRewrittenData(e.target.value)}
                />
                <button
                    className="mt-4 bg-[#2d2d2d] text-white px-4 py-2 rounded hover:text-gray-400"
                    onClick={handleVideoGeneration}
                >
                    Generate AI Video
                </button>
            </div>
        )}
    </div>
</div>

    )
}

export default DisplaySection
