import AIGenerator from './containers/ai-generator'
import Description from './containers/description'

export default function Home() {

  return (
    <main className="min-h-screen bg-[#1e1e1e] flex flex-col items-center justify-start">
      <div className="flex flex-col justify-start text-white p-4 mt-10">
        <Description />
        <AIGenerator />
      </div>
    </main>

  )
}