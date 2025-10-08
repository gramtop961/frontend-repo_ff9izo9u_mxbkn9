import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const handleClick = () => {
    const el = document.getElementById('counter')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-8">
      <div className="rounded-2xl bg-white/70 backdrop-blur shadow-lg border border-gray-200 p-8">
        <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-indigo-700 bg-indigo-50 rounded-full">
          Hello World
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
          Welcome to your new app
        </h2>
        <p className="text-gray-600 leading-relaxed">
          This is a minimal Hello World that ships with a clean design, sensible
          structure, and components you can grow from. Edit the code and see
          changes instantly.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Try the Counter
            <ArrowRight className="h-4 w-4" />
          </button>

          <a
            href="https://react.dev/learn"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg bg-white border border-gray-200 text-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            Learn React
          </a>
        </div>
      </div>
    </section>
  )
}
