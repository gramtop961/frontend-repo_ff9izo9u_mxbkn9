import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <section id="counter" className="w-full max-w-3xl mx-auto px-6 py-8">
      <div className="rounded-2xl bg-gradient-to-tr from-indigo-50 to-fuchsia-50 border border-indigo-100 p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Interactive Counter</h3>
            <p className="text-sm text-gray-600">Click to increment and reset.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCount((c) => c - 1)}
              className="px-3 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              -
            </button>
            <span className="min-w-[3rem] text-center font-mono text-lg">{count}</span>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
            >
              +
            </button>
            <button
              onClick={() => setCount(0)}
              className="px-3 py-2 rounded-lg bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
