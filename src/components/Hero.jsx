import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <motion.p {...fade(0)} className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
            Available for opportunities
          </motion.p>
          <motion.h1 {...fade(0.1)} className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Milan<br />Parajuli<span className="text-blue-500">.</span>
          </motion.h1>
          <motion.p {...fade(0.2)} className="text-xl text-slate-400 font-medium mb-4">
            Backend-Focused Full Stack Engineer
          </motion.p>
          <motion.p {...fade(0.3)} className="text-slate-500 text-base leading-relaxed mb-8 max-w-lg">
            Engineering reliable full-stack systems with performance and scalability in mind. Experienced in Spring Boot, React, MySQL, Docker, and modern software architecture.
          </motion.p>
          <motion.div {...fade(0.4)} className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded text-sm font-medium transition-all duration-200"
            >
              View Projects
            </button>
            <a href="/resume.html" target="_blank" className="border border-[#1E1E2E] hover:border-blue-500 text-slate-300 hover:text-white px-6 py-3 rounded text-sm font-medium transition-all duration-200">
              Download Resume
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-slate-400 hover:text-white px-6 py-3 rounded text-sm font-medium transition-colors duration-200"
            >
              Contact Me →
            </button>
          </motion.div>
          <motion.div {...fade(0.5)} className="flex gap-5 mt-8">
            <a href="https://github.com/Romeoparajuli" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors text-sm">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors text-sm">LinkedIn</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/20" />
            <div className="absolute inset-4 rounded-xl bg-[#111118] border border-[#1E1E2E] flex flex-col justify-center px-6 gap-3">
              {['Spring Boot', 'React', 'MySQL', 'Docker', 'Selenium'].map((t, i) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 opacity-80" />
                  <span className="text-slate-400 text-sm font-mono">{t}</span>
                </div>
              ))}
              <div className="mt-2 pt-3 border-t border-[#1E1E2E]">
                <span className="text-xs text-blue-500 font-mono">$ building scalable systems...</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
