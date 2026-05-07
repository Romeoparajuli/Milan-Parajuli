import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-[#111118] border rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300 ${project.featured ? 'border-blue-500/30' : 'border-[#1E1E2E]'}`}
    >
      {project.featured && (
        <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full mb-3 inline-block">
          Featured
        </span>
      )}
      <h3 className="text-white font-semibold text-lg mb-2">{project.name}</h3>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.summary}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map(t => (
          <span key={t} className="text-xs text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
            {t}
          </span>
        ))}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-slate-500 hover:text-blue-400 text-xs transition-colors duration-200 mb-3"
      >
        {expanded ? '▲ Less details' : '▼ More details'}
      </button>

      {expanded && (
        <div className="border-t border-[#1E1E2E] pt-4 mt-1 space-y-4">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Key Features</p>
            <ul className="space-y-1">
              {project.features.map(f => (
                <li key={f} className="text-slate-400 text-sm flex items-start gap-2">
                  <span className="text-blue-500 mt-1">›</span> {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Engineering Highlights</p>
            <p className="text-slate-400 text-sm">{project.highlights}</p>
          </div>
          <div className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg p-4">
            <p className="text-xs text-blue-400 uppercase tracking-wider mb-1">Challenge Solved</p>
            <p className="text-slate-300 text-sm">{project.challenge}</p>
          </div>
        </div>
      )}

      <div className="flex gap-3 mt-4">
        <a href={project.github || 'https://github.com/Romeoparajuli'} target="_blank" rel="noreferrer" className="text-xs text-slate-400 hover:text-white border border-[#1E1E2E] hover:border-slate-500 px-3 py-1.5 rounded transition-all duration-200">
          GitHub →
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="text-xs text-blue-400 hover:text-white border border-blue-500/30 hover:border-blue-500 px-3 py-1.5 rounded transition-all duration-200">
            Live Demo →
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-3">Projects</p>
        <h2 className="text-4xl font-bold text-white mb-3">Engineering Work</h2>
        <p className="text-slate-500 mb-12 max-w-xl">Real-world systems built with production-level thinking — architecture, scalability, and clean code.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
      </div>
    </section>
  )
}
