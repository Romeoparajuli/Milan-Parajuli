import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0F]/90 backdrop-blur border-b border-[#1E1E2E]' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-white font-bold text-lg tracking-tight cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Milan<span className="text-blue-500">.</span>
        </span>
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l}>
              <button onClick={() => scrollTo(l)} className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                {l}
              </button>
            </li>
          ))}
        </ul>
        <a href="/resume.html" target="_blank" className="hidden md:block text-sm border border-blue-500 text-blue-400 px-4 py-1.5 rounded hover:bg-blue-500 hover:text-white transition-all duration-200">
          Resume
        </a>
        <button className="md:hidden text-slate-400" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#111118] border-t border-[#1E1E2E] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="text-slate-400 hover:text-white text-sm text-left transition-colors">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
