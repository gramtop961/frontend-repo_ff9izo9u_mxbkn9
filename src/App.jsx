import Header from './components/Header'
import Hero from './components/Hero'
import Counter from './components/Counter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <Header />
      <Hero />
      <Counter />
      <Footer />
    </div>
  )
}

export default App
