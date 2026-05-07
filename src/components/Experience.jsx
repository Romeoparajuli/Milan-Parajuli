import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'

const typeBadge = {
  'Full-time': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Internship': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Leadership': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-3">Experience</p>
        <h2 className="text-4xl font-bold text-white mb-12">Work & Leadership</h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#1E1E2E] ml-3 hidden md:block" />

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="md:pl-10 relative"
              >
                <div className="hidden md:block absolute left-0 top-6 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-[#0A0A0F] ml-[7px]" />

                <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-6 hover:border-blue-500/30 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                        <span className={`text-xs border px-2 py-0.5 rounded-full ${typeBadge[exp.type]}`}>
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {exp.companyUrl ? (
                          <a href={exp.companyUrl} target="_blank" rel="noreferrer"
                            className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                            {exp.company} ↗
                          </a>
                        ) : (
                          <span className="text-blue-400 text-sm">{exp.company}</span>
                        )}
                        <span className="text-slate-600 text-xs">· {exp.location}</span>
                      </div>
                    </div>
                    <span className="text-slate-500 text-sm bg-[#0A0A0F] border border-[#1E1E2E] px-3 py-1 rounded-full shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-blue-500 mt-1 shrink-0">›</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1E1E2E]">
                    {exp.stack.map(t => (
                      <span key={t} className="text-xs text-slate-400 bg-[#0A0A0F] border border-[#1E1E2E] px-2.5 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
