'use client'
import React, { useState } from "react"

const Toggle = ({ enabledText, disabledText }: { enabledText: string; disabledText: string }) => {
    const [isToggled, setIsToggled] = useState(false)

    const toggleSwitch = () => {
        setIsToggled(!isToggled)
    }

    return (
        <div className="flex items-center justify-start text-white p-4">
            <span className="text-gray-400 text-sm sm:text-base">
                Save to {isToggled ? enabledText : disabledText}
            </span>
            &nbsp;
            <div
                className={`relative w-12 h-6 bg-gray-700 rounded-full cursor-pointer transition-colors duration-300 ${isToggled ? "bg-green-500" : "bg-gray-700"
                    }`}
                onClick={toggleSwitch}
            >
                <div
                    className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isToggled ? "translate-x-6" : "translate-x-1"
                        }`}
                ></div>
            </div>
        </div>
    )
}

export default Toggle