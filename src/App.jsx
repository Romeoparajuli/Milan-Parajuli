import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#0A0A0F] min-h-screen">
      <Navbar />
      <Hero />
      <div className="border-t border-[#1E1E2E]" />
      <About />
      <div className="border-t border-[#1E1E2E]" />
      <Skills />
      <div className="border-t border-[#1E1E2E]" />
      <Projects />
      <div className="border-t border-[#1E1E2E]" />
      <Experience />
      <div className="border-t border-[#1E1E2E]" />
      <Achievements />
      <div className="border-t border-[#1E1E2E]" />
      <Contact />
      <Footer />
    </div>
  )
}
