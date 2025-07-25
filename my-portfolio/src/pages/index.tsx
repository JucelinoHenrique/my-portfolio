import Header from '../pages/components/Header'
import Hero from '../pages/components/Hero'
import Footer from '../pages/components/Footer'
import TechStack from './components/TechStack'

export default function Home() {
  return (
    <main className="bg-[#0f172a] text-white min-h-screen">
      <Header />
      <Hero />
      <TechStack/>
      <Footer />
    </main>
  )
}
