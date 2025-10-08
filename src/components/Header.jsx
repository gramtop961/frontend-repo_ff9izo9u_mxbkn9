import { Rocket } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full max-w-3xl mx-auto px-6 pt-12 pb-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white grid place-items-center shadow-lg">
          <Rocket className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Hello World App
          </h1>
          <p className="text-sm text-gray-500">A tiny, beautiful starter built with React + Tailwind</p>
        </div>
      </div>
    </header>
  )
}
