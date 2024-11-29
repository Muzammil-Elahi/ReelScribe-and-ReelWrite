'use client'
import React from "react"

const Toggle = ({ 
    enabledText, 
    disabledText,
    isToggled,
    setIsToggled,
 }: { enabledText: string; disabledText: string, isToggled: boolean, setIsToggled: (isToggled: boolean) => void }) => {

    const toggleSwitch = () => {
        setIsToggled(!isToggled)
    }

    return (
        <div className="flex items-center justify-start text-white pt-4">
            <span className="text-gray-400 text-sm sm:text-base">
               {isToggled ? enabledText : disabledText}
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
