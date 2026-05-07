import { motion } from 'framer-motion'

const stats = [
  { label: 'Projects Built', value: '10+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Years Learning', value: '3+' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-3">About</p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Building systems,<br />not just interfaces.
          </h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            I'm a BCIS graduate and Backend-Focused Full Stack Developer with hands-on experience building enterprise-grade applications. My core stack is Spring Boot + React, with strong emphasis on clean architecture, database design, and scalable backend systems.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            Beyond engineering, I lead the IT & Communication Department at NCCAA Nepal — driving digital transformation, ERP planning, and organizational tech strategy. First Prize winner at a Startup Idea Challenge with a systems-thinking and entrepreneurial mindset.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Scalable Architecture', 'Clean Code', 'Security', 'Performance', 'Documentation'].map(tag => (
              <span key={tag} className="text-xs text-blue-400 border border-blue-500/30 bg-blue-500/5 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-4">
            {stats.map(s => (
              <div key={s.label} className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-slate-500 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-6">
            <p className="text-slate-400 text-sm font-medium mb-3">Primary Identity</p>
            <p className="text-white font-semibold text-lg mb-4">Backend-Focused Full Stack Engineer</p>
            <div className="grid grid-cols-2 gap-2">
              {['Spring Boot', 'React', 'System Design', 'Database Architecture', 'Docker', 'Testing & Automation'].map(s => (
                <div key={s} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-slate-400 text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
