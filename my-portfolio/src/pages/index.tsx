import Header from '../pages/components/Header'
import Hero from '../pages/components/Hero'
import Footer from '../pages/components/Footer'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import MySkills from './components/myskills'
import ServicosSection from './components/ServicesSection'

export default function Home() {
  return (
    <main className="bg-[#161616] text-white min-h-screen scroll-smooth">
      <Header />
      <Hero />
      <MySkills/>
      <ServicosSection/>
      <About/>
      <Projects/>
      <TechStack/>
      <Contact/>
      <Footer />
    </main>
  )
}
