const Loading = ({ loadingText = "Loading, please wait..." }: { loadingText?: string }) => {
    return (
      <div className="flex flex-col items-center justify-center bg-[#1e1e1e] text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-500 border-opacity-50 border-t-white mb-6"></div>
        <p className="text-gray-400 text-sm sm:text-base">{loadingText}</p>
      </div>
    )
}

export default Loading