
export default function RadioButton({ setSelectedModel, selectedModel }: { setSelectedModel: (model: string) => void, selectedModel: string }) {
  const handleModelChange = (e: any) => {
    const model = e.target.value
    setSelectedModel(model)
  }
  return (
    <div className="relative flex items-center max-w-4xl mx-auto mt-4">
    <div className="flex space-x-4">
      <label className="flex items-center space-x-2 text-gray-400">
        <input
          type="radio"
          name="model"
          value="chatgpt"
          defaultChecked
          checked={selectedModel === 'chatgpt'}
          onChange={handleModelChange}
         className="peer hidden"
        />
         <div className="w-6 h-6 !ml-0 border-2 border-gray-500 rounded-full peer-checked:bg-gray-100 peer-checked:border-gray-100 cursor-pointer"></div>
        <span>ChatGPT</span>
      </label>
      <label className="flex items-center space-x-2 text-gray-400">
        <input
          type="radio"
          name="model"
          value="gemini"
          onChange={handleModelChange}
          checked={selectedModel === 'gemini'}
         className="peer hidden"
        />
         <div className="w-6 h-6 border-2 border-gray-500 rounded-full peer-checked:bg-gray-100 peer-checked:border-gray-100 cursor-pointer"></div>
        <span>Gemini</span>
      </label>
    </div>
  </div>
  )
}