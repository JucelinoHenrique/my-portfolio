import Header from '../pages/components/Header'
import Hero from '../pages/components/Hero'
import Footer from '../pages/components/Footer'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="bg-[#0f172a] text-white min-h-screen">
      <Header />
      <Hero />
      <About/>
      <Projects/>
      <TechStack/>
      <Contact/>
      <Footer />
    </main>
  )
}
