import Header from './components/Header'
import Hero from './components/Hero'
import Counter from './components/Counter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <Header />
      <Hero />

      <main className="w-full max-w-3xl mx-auto px-6">
        <section className="rounded-xl border border-dashed border-gray-300 bg-white/60 backdrop-blur p-4 text-center text-gray-700">
          Simple Message: Hello, World!
        </section>
      </main>

      <Counter />
      <Footer />
    </div>
  )
}

export default App
