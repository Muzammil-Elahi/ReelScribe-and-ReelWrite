import Input from './components/input'

export default function Home() {

  return (
    <main className="min-h-screen bg-[#1e1e1e] flex flex-col items-center justify-center">
      <div className="flex flex-col justify-start text-white p-4">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">ReelScribe and ReelWrite</h1>
        <p className="text-sm sm:text-base text-gray-400 mb-6 text-left">
          ReelScribe simplifies content creation by transcribing Instagram Reels into editable scripts with a single click.
        </p>
        <p className="text-sm sm:text-base text-gray-400 mb-6 text-left">
          Ideal for creators, marketers, and influencers aiming for precision and creativity in their content.
        </p>
        <Input />
      </div>
    </main>

  )
}